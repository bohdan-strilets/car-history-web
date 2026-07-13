import { useCallback, useRef, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { env } from '@config/env';
import type { ConversationId } from '@entities/ai-conversation';
import { refreshAccessToken } from '@shared/api';
import { ENDPOINTS, queryKeys } from '@shared/config';
import { useAuthStore } from '@shared/store';

import { parseSseBlock } from '../lib';

import type {
  ChunkEventData,
  CompleteEventData,
  ErrorEventData,
  SendMessageState,
} from './use-send-message.types';

interface UseSendMessageParams {
  conversationId: ConversationId;
}

const INITIAL_STATE: SendMessageState = {
  isStreaming: false,
  streamedContent: '',
  pendingUserContent: null,
  error: null,
};

export const useSendMessage = ({ conversationId }: UseSendMessageParams) => {
  const queryClient = useQueryClient();
  const [state, setState] = useState<SendMessageState>(INITIAL_STATE);
  const abortControllerRef = useRef<AbortController | null>(null);

  const performRequest = useCallback(
    (content: string, token: string | null, signal: AbortSignal) => {
      return fetch(`${env.VITE_API_URL}${ENDPOINTS.AI.MESSAGES(conversationId)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: 'include',
        body: JSON.stringify({ content }),
        signal,
      });
    },
    [conversationId],
  );

  const invalidateConversation = useCallback(async () => {
    await queryClient.invalidateQueries({
      queryKey: queryKeys.ai.conversation(conversationId),
    });
    await queryClient.invalidateQueries({ queryKey: queryKeys.ai.conversations() });
  }, [conversationId, queryClient]);

  const sendMessage = useCallback(
    async (content: string) => {
      setState({
        isStreaming: true,
        streamedContent: '',
        pendingUserContent: content,
        error: null,
      });

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      try {
        const token = useAuthStore.getState().accessToken;
        let response = await performRequest(content, token, abortController.signal);

        if (response.status === 401) {
          const newToken = await refreshAccessToken();
          response = await performRequest(content, newToken, abortController.signal);
        }

        if (!response.ok || !response.body) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          const parts = buffer.split('\n\n');
          buffer = parts.pop() ?? '';

          for (const part of parts) {
            const parsed = parseSseBlock(part);
            if (!parsed) continue;

            if (parsed.event === 'chunk') {
              const { chunk } = parsed.data as ChunkEventData;
              setState((prev) => ({ ...prev, streamedContent: prev.streamedContent + chunk }));
            }

            if (parsed.event === 'complete') {
              const completeData = parsed.data as CompleteEventData;
              setState((prev) => ({ ...prev, streamedContent: completeData.content }));
              await invalidateConversation();
              setState((prev) => ({ ...prev, pendingUserContent: null, streamedContent: '' }));
            }

            if (parsed.event === 'error') {
              const { error } = parsed.data as ErrorEventData;
              setState((prev) => ({ ...prev, error }));
              await invalidateConversation();
              setState((prev) => ({ ...prev, pendingUserContent: null }));
            }
          }
        }

        setState((prev) => ({ ...prev, isStreaming: false }));
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          setState((prev) => ({ ...prev, isStreaming: false }));
          return;
        }

        const message = error instanceof Error ? error.message : 'Unknown error';
        setState((prev) => ({ ...prev, isStreaming: false, error: message }));
      }
    },
    [invalidateConversation, performRequest],
  );

  const cancel = useCallback(() => {
    abortControllerRef.current?.abort();
  }, []);

  return {
    ...state,
    sendMessage,
    cancel,
  };
};
