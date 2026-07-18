import { useEffect, type PropsWithChildren } from 'react';

import { useActiveWorkspace, useWorkspacesQuery } from '@entities/workspace';
import { useInitQuery } from '@features/auth';
import { useAuth } from '@shared/store';
import { Spinner, Stack } from '@shared/ui';

export const InitProvider = ({ children }: PropsWithChildren) => {
  const { isLoading: isMeLoading } = useInitQuery();
  const { isAuthenticated } = useAuth();

  const { data: workspacesData, isLoading: isWorkspacesLoading } =
    useWorkspacesQuery(isAuthenticated);
  const { ensureValid } = useActiveWorkspace();

  useEffect(() => {
    if (!isAuthenticated) return;
    const workspaces = workspacesData?.data ?? [];
    ensureValid(workspaces);
  }, [workspacesData, isAuthenticated, ensureValid]);

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
