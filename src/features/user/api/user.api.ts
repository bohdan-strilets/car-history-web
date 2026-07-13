import type { User, UserSettings } from '@entities/user';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type {
  ChangeEmailDto,
  ChangePasswordDto,
  ConfirmEmailChangeDto,
  DeleteAccountDto,
  UpdateProfileDto,
} from '../model';

export const userApi = {
  updateProfile: (dto: UpdateProfileDto) => {
    const path = ENDPOINTS.USERS.ME;
    return apiClient.patch<User>(path, dto);
  },

  updateSettings: (dto: Partial<UserSettings>) => {
    const path = ENDPOINTS.USERS.ME_SETTINGS;
    return apiClient.patch<UserSettings>(path, dto);
  },

  changePassword: (dto: ChangePasswordDto) => {
    const path = ENDPOINTS.USERS.ME_PASSWORD;
    return apiClient.patch<void>(path, dto);
  },

  changeEmail: (dto: ChangeEmailDto) => {
    const path = ENDPOINTS.USERS.ME_CHANGE_EMAIL;
    return apiClient.post<void>(path, dto);
  },

  confirmEmailChange: (dto: ConfirmEmailChangeDto) => {
    const path = ENDPOINTS.USERS.ME_CONFIRM_EMAIL_CHANGE;
    return apiClient.post<void>(path, dto);
  },

  deleteAccount: (dto: DeleteAccountDto) => {
    const path = ENDPOINTS.USERS.ME;
    return apiClient.delete<void>(path, { data: dto });
  },
};
