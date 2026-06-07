import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@shared/lib';

import type { SidebarStore } from './sidebar.types';

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      expanded: false,
      toggle: () => set((state) => ({ expanded: !state.expanded })),
      setExpanded: (expanded) => set({ expanded }),
    }),
    { name: STORAGE_KEYS.SIDEBAR_STORAGE_KEY },
  ),
);
