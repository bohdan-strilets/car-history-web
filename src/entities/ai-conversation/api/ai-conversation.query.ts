import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { aiConversationApi } from './ai-conversation.api';

import type { ConversationId } from '../model';

// Get all conversations for the current user
export const useConversationsQuery = () => {
  return useQuery({
    queryKey: queryKeys.ai.conversations(),
    queryFn: () => aiConversationApi.getMany(),
  });
};

// Get a single conversation with its messages
export const useConversationQuery = (conversationId: ConversationId) => {
  return useQuery({
    queryKey: queryKeys.ai.conversation(conversationId),
    queryFn: () => aiConversationApi.getOne(conversationId),
    enabled: !!conversationId,
  });
};
