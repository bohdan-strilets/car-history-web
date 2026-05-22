import { apiClient, ENDPOINTS } from '@shared/api';

export const userApi = {
  completeOnboarding: () => {
    return apiClient.patch<void>(ENDPOINTS.USERS.ME_ONBOARDING);
  },
};
