import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { WorkspaceStore } from './workspace.types';

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
      activeWorkspace: null,

      setActiveWorkspace: (workspace) => set({ activeWorkspace: workspace }),
      clearActiveWorkspace: () => set({ activeWorkspace: null }),
    }),
    { name: 'workspace' },
  ),
);
