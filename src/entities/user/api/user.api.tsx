import { apiClient, ENDPOINTS } from '@shared/api';

export const userApi = {
  completeOnboarding: () => {
    const path = ENDPOINTS.USERS.ME_ONBOARDING;
    return apiClient.patch<void>(path);
  },
};
