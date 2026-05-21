import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { WorkspaceStore } from './workspace.types';

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
      activeWorkspace: null,
      activeWorkspaceId: null,

      setActiveWorkspace: (workspace) => set({ activeWorkspace: workspace }),
      clearActiveWorkspace: () => set({ activeWorkspace: null }),
      setActiveWorkspaceId: (workspaceId) => set({ activeWorkspaceId: workspaceId }),
      clearActiveWorkspaceId: () => set({ activeWorkspaceId: null }),
    }),
    { name: 'workspace' },
  ),
);
