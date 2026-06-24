import { Skeleton, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { EventCardSkeleton } from '../event-card';

export const EventListSkeleton = () => {
  return (
    <Stack gap="xl">
      <PageHeaderSkeleton />
      <Skeleton width="100%" height="55px" />
      <Stack gap="3xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </Stack>
    </Stack>
  );
};
