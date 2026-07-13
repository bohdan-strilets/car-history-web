import type { Language, Theme } from '@entities/user';

export interface UpdateUserSettingsDto {
  language?: Language;
  theme?: Theme;
  notificationsEmail?: boolean;
  notificationsPush?: boolean;
}

export interface UpdateProfileDto {
  firstName?: string;
  lastName?: string;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface ChangeEmailDto {
  newEmail: string;
}

export interface ConfirmEmailChangeDto {
  token: string;
}

export interface DeleteAccountDto {
  password: string;
}
