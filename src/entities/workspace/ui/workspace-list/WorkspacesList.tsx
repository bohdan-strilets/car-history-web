import { useActiveWorkspace } from '@entities/workspace';
import { Grid } from '@shared/ui';

import { WorkspaceCard } from '../workspace-card';

import type { WorkspacesListProps } from './workspaces-list.types';

export const WorkspacesList = ({ workspaces }: WorkspacesListProps) => {
  const { activeWorkspaceId } = useActiveWorkspace();

  return (
    <Grid columns={{ mobile: '1', tablet: '2', desktop: '3' }} gap="2xl">
      {workspaces.map((workspace) => {
        const isCurrent = workspace.id === activeWorkspaceId;

        return (
          <WorkspaceCard
            key={workspace.id}
            id={workspace.id}
            name={workspace.name}
            type={workspace.type}
            role={workspace.role}
            isCurrent={isCurrent}
            countMembers={workspace.membersCount}
            countCars={workspace.vehiclesCount}
            createdAt={workspace.createdAt}
          />
        );
      })}
    </Grid>
  );
};
