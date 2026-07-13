import { useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

import { MessageBubble, useConversationQuery } from '@entities/ai-conversation';
import { ChatInput, useSendMessage } from '@features/ai-chat';
import { ScrollView, Skeleton, Stack, Text } from '@shared/ui';

import * as styles from './ai-conversation.page.css';

interface LocationState {
  initialMessage?: string;
}

export const AiConversationPage = () => {
  const { t } = useTranslation();
  const { conversationId = '' } = useParams<{ conversationId: string }>();
  const location = useLocation();
  const initialMessageSentRef = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, isPending, isError } = useConversationQuery(conversationId);
  const { isStreaming, streamedContent, pendingUserContent, error, sendMessage } = useSendMessage({
    conversationId,
  });

  const messages = data?.data.messages ?? [];

  useEffect(() => {
    const state = location.state as LocationState | null;
    const initialMessage = state?.initialMessage;

    if (initialMessage && !initialMessageSentRef.current) {
      initialMessageSentRef.current = true;
      sendMessage(initialMessage);
    }
  }, [location.state, sendMessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, streamedContent, pendingUserContent]);

  if (isPending) {
    return (
      <Stack gap="lg">
        <Skeleton width="60%" height="24px" />
        <Skeleton width="80%" height="60px" />
        <Skeleton width="70%" height="60px" />
      </Stack>
    );
  }

  if (isError) {
    return <Text color="danger">{t('errors.AI_CONVERSATION_NOT_FOUND')}</Text>;
  }

  return (
    <div className={styles.container}>
      <ScrollView direction="vertical" className={styles.messagesArea}>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {pendingUserContent && (
          <MessageBubble
            message={{
              id: 'pending-user',
              conversationId,
              role: 'USER',
              content: pendingUserContent,
              tokensUsed: null,
              isError: false,
              createdAt: new Date(),
            }}
          />
        )}

        {isStreaming && streamedContent && (
          <MessageBubble
            message={{
              id: 'streaming',
              conversationId,
              role: 'ASSISTANT',
              content: streamedContent,
              tokensUsed: null,
              isError: false,
              createdAt: new Date(),
            }}
          />
        )}

        {error && <Text color="danger">{error}</Text>}

        <div ref={bottomRef} />
      </ScrollView>

      <div className={styles.inputArea}>
        <ChatInput onSend={sendMessage} disabled={isStreaming} />
      </div>
    </div>
  );
};
