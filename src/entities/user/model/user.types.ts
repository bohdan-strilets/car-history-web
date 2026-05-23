// Constants

export const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED',
} as const;

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];

export const LANGUAGE = {
  PL: 'PL',
  UK: 'UK',
  EN: 'EN',
} as const;

export type Language = (typeof LANGUAGE)[keyof typeof LANGUAGE];

export const THEME = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  SYSTEM: 'SYSTEM',
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

// Types

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
