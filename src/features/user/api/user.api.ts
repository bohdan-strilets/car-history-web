import type { UserSettings } from '@entities/user';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

export const userApi = {
  updateSettings: (dto: Partial<UserSettings>) => {
    const path = ENDPOINTS.USERS.ME_SETTINGS;
    return apiClient.patch<UserSettings>(path, dto);
  },
};
