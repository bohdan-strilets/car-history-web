import type { AiConversation } from '@entities/ai-conversation';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { CreateConversationPayload } from '../model';

export const aiChatApi = {
  create: (payload: CreateConversationPayload) => {
    return apiClient.post<AiConversation>(ENDPOINTS.AI.CONVERSATIONS, payload);
  },
};
