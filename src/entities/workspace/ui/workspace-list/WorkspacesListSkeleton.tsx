import { Grid, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { WorkspaceCardSkeleton } from '../workspace-card';

export const WorkspacesListSkeleton = () => {
  return (
    <Stack gap="3xl">
      <PageHeaderSkeleton />
      <Grid columns={{ mobile: '1', tablet: '2', desktop: '3' }} gap="2xl">
        {Array.from({ length: 6 }).map((_, i) => (
          <WorkspaceCardSkeleton key={i} />
        ))}
      </Grid>
    </Stack>
  );
};
