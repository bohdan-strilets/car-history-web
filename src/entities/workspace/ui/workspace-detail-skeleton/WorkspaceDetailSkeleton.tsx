import { Stack } from '@shared/ui';
import { TabsSkeleton } from '@shared/ui/components/tabs';
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
