import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { Session, SessionId } from '../model';

export const sessionApi = {
  getAll: () => {
    const path = ENDPOINTS.USERS.ME_SESSIONS;
    return apiClient.get<Session[]>(path);
  },

  revoke: (sessionId: SessionId) => {
    const path = ENDPOINTS.USERS.ME_SESSION(sessionId);
    return apiClient.delete<void>(path);
  },

  revokeAll: () => {
    const path = ENDPOINTS.USERS.ME_SESSIONS;
    return apiClient.delete<void>(path);
  },
};
