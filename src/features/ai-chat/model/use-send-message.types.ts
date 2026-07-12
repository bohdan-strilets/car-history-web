import type { VehicleId } from '@entities/vehicle';

export interface SseEvent<T = unknown> {
  event: string;
  data: T;
}

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
  error: string | null;
}

// Request payloads

export interface CreateConversationPayload {
  vehicleId?: VehicleId;
  title?: string;
}
