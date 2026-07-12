import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { AiConversation, AiConversationDetail, ConversationId } from '../model';

export const aiConversationApi = {
  getMany: () => {
    return apiClient.getPaginated<AiConversation>(ENDPOINTS.AI.CONVERSATIONS);
  },

  getOne: (conversationId: ConversationId) => {
    const path = ENDPOINTS.AI.CONVERSATION(conversationId);
    return apiClient.get<AiConversationDetail>(path);
  },
};
