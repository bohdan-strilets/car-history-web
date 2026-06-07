import { Stack, TabsSkeleton } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { MembersListSkeleton } from '../members-list';

export const WorkspaceDetailSkeleton = () => {
  return (
    <Stack gap="2xl">
      <PageHeaderSkeleton />
      <TabsSkeleton />
      <Stack gap="xl">
        <MembersListSkeleton />
      </Stack>
    </Stack>
  );
};
