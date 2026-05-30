import { useWorkspace } from '@entities/workspace';
import { useWorkspacesQuery } from '@entities/workspace/api';
import { useMeQuery } from '@features/auth/api';
import { useAuth } from '@shared/store/auth';
import { Spinner, Stack } from '@shared/ui';
import { useEffect, type PropsWithChildren } from 'react';

export const InitProvider = ({ children }: PropsWithChildren) => {
  const { isLoading: isMeLoading } = useMeQuery();
  const { isAuthenticated } = useAuth();

  const { data: workspacesData, isLoading: isWorkspacesLoading } =
    useWorkspacesQuery(isAuthenticated);
  const { activeWorkspaceId, setActiveWorkspace, setActiveWorkspaceId } = useWorkspace();

  useEffect(() => {
    if (!isAuthenticated) return;
    const workspaces = workspacesData?.data ?? [];
    if (!activeWorkspaceId && workspaces.length > 0) {
      setActiveWorkspaceId(workspaces[0].id);
      setActiveWorkspace(workspaces[0]);
    }
  }, [
    workspacesData,
    activeWorkspaceId,
    isAuthenticated,
    setActiveWorkspaceId,
    setActiveWorkspace,
  ]);

  const isLoading = isMeLoading || (isAuthenticated && isWorkspacesLoading);

  if (isLoading) {
    return (
      <Stack align="center" justify="center" style={{ height: '100vh' }}>
        <Spinner size="xl" color="accent" />
      </Stack>
    );
  }

  return <>{children}</>;
};
