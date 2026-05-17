import { APP_CONSTANTS } from '@shared/config';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { SidebarStore } from './sidebar.types';

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      expanded: false,
      toggle: () => set((state) => ({ expanded: !state.expanded })),
      setExpanded: (expanded) => set({ expanded }),
    }),
    {
      name: APP_CONSTANTS.SIDEBAR_STORAGE_KEY,
    },
  ),
);
