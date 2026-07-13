import type { VehicleId } from '@entities/vehicle';

export interface ChunkEventData {
  chunk: string;
}

export interface CompleteEventData {
  messageId: string;
  content: string;
  tokensUsed: number;
}

export interface ErrorEventData {
  error: string;
}

export interface SendMessageState {
  isStreaming: boolean;
  streamedContent: string;
  pendingUserContent: string | null;
  error: string | null;
}

// Request payloads

export interface CreateConversationPayload {
  vehicleId?: VehicleId;
  title?: string;
}
