// User status

export const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED',
} as const;

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];

// User settings

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
