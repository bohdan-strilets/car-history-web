import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { THEME_STORAGE_KEY } from './theme.constants';
import type { ThemeStore } from './theme.types';

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'system',
      resolvedTheme: 'light',

      setTheme: (theme) => set({ theme }),
      setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
    }),
    { name: THEME_STORAGE_KEY },
  ),
);
