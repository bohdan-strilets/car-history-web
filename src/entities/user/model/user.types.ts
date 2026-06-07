import type { Language, Theme, UserStatus } from './user.constants';

export type UserId = string;
export type UserSettingsId = string;

export interface User {
  id: UserId;
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  status: UserStatus;
  onboardingCompleted: boolean;
  createdAt: string;
}

export interface UserSettings {
  id: UserSettingsId;
  userId: UserId;
  language: Language;
  theme: Theme;
  notificationsEmail: boolean;
  notificationsPush: boolean;
  createdAt: string;
  updatedAt: string;
}
