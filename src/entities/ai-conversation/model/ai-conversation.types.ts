import type { VehicleId } from '@entities/vehicle';

import type { MessageRole } from './ai-conversation.constants';

// Types

export type ConversationId = string;
export type MessageId = string;

// AiMessage entity

export interface AiMessage {
  id: MessageId;
  conversationId: ConversationId;
  role: MessageRole;
  content: string;
  tokensUsed: number | null;
  isError: boolean;
  createdAt: Date;
}

// AiConversation entity

export interface AiConversation {
  id: ConversationId;
  vehicleId: VehicleId | null;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AiConversationDetail extends AiConversation {
  messages: AiMessage[];
}
