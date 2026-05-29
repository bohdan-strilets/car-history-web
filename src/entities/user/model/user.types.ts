import type { Language, Theme, UserStatus } from './user.constants';

export interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  status: UserStatus;
  onboardingCompleted: boolean;
  createdAt: Date;
}

export interface UserSettings {
  id: string;
  userId: string;
  language: Language;
  theme: Theme;
  notificationsEmail: boolean;
  notificationsPush: boolean;
  createdAt: string;
  updatedAt: string;
}
