import type { UserSettings } from '@entities/user';
import { apiClient, ENDPOINTS } from '@shared/api';

export const userApi = {
  updateSettings: (dto: Partial<UserSettings>) => {
    const path = ENDPOINTS.USERS.ME_SETTINGS;
    return apiClient.patch<UserSettings>(path, dto);
  },
};
