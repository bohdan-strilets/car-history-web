import { Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { ReminderCardSkeleton } from '../reminder-card';

export const ReminderListSkeleton = () => (
  <Stack gap="xl">
    <PageHeaderSkeleton />
    <Stack gap="md">
      {Array.from({ length: 3 }).map((_, i) => (
        <ReminderCardSkeleton key={i} />
      ))}
    </Stack>
  </Stack>
);
