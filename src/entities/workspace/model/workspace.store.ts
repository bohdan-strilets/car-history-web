import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@shared/lib';

import type { WorkspaceStore } from './workspace.types';

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
      activeWorkspaceId: null,

      setActiveWorkspaceId: (id) => set({ activeWorkspaceId: id }),
      clearActiveWorkspaceId: () => set({ activeWorkspaceId: null }),
    }),
    { name: STORAGE_KEYS.WORKSPACE_STORAGE_KEY },
  ),
);
