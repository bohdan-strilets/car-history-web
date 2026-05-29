import { Stack } from '@shared/ui';

import { MemberRowSkeleton } from '../member-row';

export const MembersListSkeleton = () => {
  return (
    <Stack gap="xl">
      {Array.from({ length: 5 }).map((_, i) => (
        <MemberRowSkeleton key={i} />
      ))}
    </Stack>
  );
};
