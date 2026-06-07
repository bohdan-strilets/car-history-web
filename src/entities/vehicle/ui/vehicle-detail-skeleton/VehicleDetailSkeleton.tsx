import { Stack, TabsSkeleton } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { VehicleOverviewSkeleton } from '../vehicle-overview';

export const VehicleDetailSkeleton = () => {
  return (
    <Stack gap="2xl">
      <PageHeaderSkeleton />
      <TabsSkeleton />
      <VehicleOverviewSkeleton />
    </Stack>
  );
};
