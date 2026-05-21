export const APP_CONSTANTS = {
  RESEND_COOLDOWN: 60,

  THEME_STORAGE_KEY: 'arvino-theme',
  SIDEBAR_STORAGE_KEY: 'arvino-sidebar',

  CURENT_YEAR: new Date().getFullYear(),
  NEXT_YEAR: new Date().getFullYear() + 1,
} as const;
