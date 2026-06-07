import { Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { MemberRowSkeleton } from '../member-row';

export const MembersListSkeleton = () => {
  return (
    <Stack gap="3xl">
      <PageHeaderSkeleton />
      <Stack gap="xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <MemberRowSkeleton key={i} />
        ))}
      </Stack>
    </Stack>
  );
};
