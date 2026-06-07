import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

export const userApi = {
  completeOnboarding: () => {
    const path = ENDPOINTS.USERS.ME_ONBOARDING;
    return apiClient.patch<void>(path);
  },
};
