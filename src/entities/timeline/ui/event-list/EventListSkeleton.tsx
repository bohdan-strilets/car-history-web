import { Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { EventCardSkeleton } from '../event-card';

export const EventListSkeleton = () => {
  return (
    <Stack gap="xl">
      <PageHeaderSkeleton />
      <Stack gap="3xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </Stack>
    </Stack>
  );
};
