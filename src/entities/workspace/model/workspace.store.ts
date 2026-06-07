import { STORAGE_KEYS } from '@shared/lib/storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { WorkspaceStore } from './workspace.types';

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
      activeWorkspace: null,
      activeWorkspaceId: null,

      setActiveWorkspace: (wk) => set({ activeWorkspace: wk }),
      clearActiveWorkspace: () => set({ activeWorkspace: null }),
      setActiveWorkspaceId: (id) => set({ activeWorkspaceId: id }),
      clearActiveWorkspaceId: () => set({ activeWorkspaceId: null }),
    }),
    { name: STORAGE_KEYS.WORKSPACE_STORAGE_KEY },
  ),
);
