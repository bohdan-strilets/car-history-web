import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { aiChatApi } from './ai-chat.api';

import type { CreateConversationPayload } from '../model';

export const useCreateConversationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateConversationPayload) => {
      return aiChatApi.create(payload);
    },

    onSuccess: () => {
      const keys = queryKeys.ai.conversations();
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
