import type { UserSettings } from '@entities/user';
import { apiClient, ENDPOINTS } from '@shared/api';

export const userApi = {
  updateSettings: (dto: Partial<UserSettings>) => {
    return apiClient.patch<UserSettings>(ENDPOINTS.USERS.ME_SETTINGS, dto);
  },
};
