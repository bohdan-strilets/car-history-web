import { useCallback } from 'react';

import { useWorkspaceStore } from './workspace.store';

import type { Workspace, WorkspaceId } from './workspace.types';

export const useActiveWorkspace = () => {
  const { activeWorkspaceId, setActiveWorkspaceId, clearActiveWorkspaceId } = useWorkspaceStore();

  const ensureValid = useCallback(
    (workspaces: Pick<Workspace, 'id'>[]) => {
      if (workspaces.length === 0) {
        if (activeWorkspaceId) clearActiveWorkspaceId();
        return;
      }

      const isValid = workspaces.some((w) => w.id === activeWorkspaceId);
      if (!isValid) {
        setActiveWorkspaceId(workspaces[0].id);
      }
    },
    [activeWorkspaceId, setActiveWorkspaceId, clearActiveWorkspaceId],
  );

  const switchAwayFrom = useCallback(
    (workspaceId: WorkspaceId, remaining: Pick<Workspace, 'id'>[]) => {
      if (activeWorkspaceId !== workspaceId) return;

      const next = remaining.find((w) => w.id !== workspaceId);
      if (next) {
        setActiveWorkspaceId(next.id);
      } else {
        clearActiveWorkspaceId();
      }
    },
    [activeWorkspaceId, setActiveWorkspaceId, clearActiveWorkspaceId],
  );

  const handleAccessDenied = useCallback(
    (workspaceId: WorkspaceId) => {
      if (activeWorkspaceId === workspaceId) {
        clearActiveWorkspaceId();
      }
    },
    [activeWorkspaceId, clearActiveWorkspaceId],
  );

  return {
    activeWorkspaceId,
    setActiveWorkspaceId,
    clearActiveWorkspaceId,
    ensureValid,
    switchAwayFrom,
    handleAccessDenied,
  };
};
