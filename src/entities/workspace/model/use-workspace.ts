import { useWorkspaceStore } from './workspace.store';

export const useWorkspace = () => {
  const { activeWorkspaceId, setActiveWorkspaceId, clearActiveWorkspaceId } = useWorkspaceStore();

  return {
    activeWorkspaceId,
    setActiveWorkspaceId,
    clearActiveWorkspaceId,
  };
};
