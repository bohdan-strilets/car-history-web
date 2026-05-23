import { THEME } from '@entities/user';
import { STORAGE_KEYS } from '@shared/lib/storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ThemeStore } from './theme.types';

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: THEME.SYSTEM,
      resolvedTheme: THEME.LIGHT,

      setTheme: (theme) => set({ theme }),
      setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
    }),
    { name: STORAGE_KEYS.THEME_STORAGE_KEY },
  ),
);
