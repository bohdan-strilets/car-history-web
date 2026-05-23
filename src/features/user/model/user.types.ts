// DTOs;

import type { Language, Theme } from '@entities/user';

export interface UpdateUserSettingsDto {
  language?: Language;
  theme?: Theme;
  notificationsEmail?: boolean;
  notificationsPush?: boolean;
}
