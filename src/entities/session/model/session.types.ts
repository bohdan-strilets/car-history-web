export type SessionId = string;

export interface Session {
  id: SessionId;
  deviceName: string | null;
  userAgent: string | null;
  ipAddress: string | null;
  lastActivityAt: string | null;
  expiresAt: string;
  createdAt: string;
  isCurrent: boolean;
}
