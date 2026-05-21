import { useWorkspaceStore } from './workspace.store';

export const useWorkspace = () => {
  const {
    activeWorkspace,
    activeWorkspaceId,
    setActiveWorkspace,
    clearActiveWorkspace,
    setActiveWorkspaceId,
    clearActiveWorkspaceId,
  } = useWorkspaceStore();

  return {
    activeWorkspace,
    activeWorkspaceId,
    setActiveWorkspace,
    clearActiveWorkspace,
    setActiveWorkspaceId,
    clearActiveWorkspaceId,
  };
};
