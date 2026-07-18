import { Stack } from '@shared/ui';

import { SessionRowSkeleton } from '../session-row';

export const SessionsListSkeleton = () => (
  <Stack gap="xl">
    {Array.from({ length: 3 }).map((_, i) => (
      <SessionRowSkeleton key={i} />
    ))}
  </Stack>
);
