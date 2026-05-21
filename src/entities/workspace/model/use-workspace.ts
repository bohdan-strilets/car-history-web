import { useWorkspaceStore } from './workspace.store';

export const useWorkspace = () => {
  const { activeWorkspace, setActiveWorkspace, clearActiveWorkspace } = useWorkspaceStore();

  return {
    activeWorkspace,
    setActiveWorkspace,
    clearActiveWorkspace,
  };
};
