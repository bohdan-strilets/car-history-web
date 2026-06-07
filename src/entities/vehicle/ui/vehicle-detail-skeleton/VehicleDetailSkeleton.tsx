import { Stack } from '@shared/ui';
import { TabsSkeleton } from '@shared/ui/components/tabs';
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
