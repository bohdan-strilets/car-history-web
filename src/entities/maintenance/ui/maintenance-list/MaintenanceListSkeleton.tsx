import { Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { MaintenanceCardSkeleton } from '../maintenance-card';

export const MaintenanceListSkeleton = () => (
  <Stack gap="xl">
    <PageHeaderSkeleton />
    <Stack gap="md">
      {Array.from({ length: 3 }).map((_, i) => (
        <MaintenanceCardSkeleton key={i} />
      ))}
    </Stack>
  </Stack>
);
