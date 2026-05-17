import { APP_CONSTANTS } from '@shared/config';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ThemeStore } from './theme.types';

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'system',
      resolvedTheme: 'light',

      setTheme: (theme) => set({ theme }),
      setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
    }),
    { name: APP_CONSTANTS.THEME_STORAGE_KEY },
  ),
);
