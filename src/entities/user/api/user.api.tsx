import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { UserProfile } from '../model';

export const userApi = {
  getMe: () => {
    const path = ENDPOINTS.USERS.ME;
    return apiClient.get<UserProfile>(path);
  },

  completeOnboarding: () => {
    const path = ENDPOINTS.USERS.ME_ONBOARDING;
    return apiClient.patch<void>(path);
  },
};
