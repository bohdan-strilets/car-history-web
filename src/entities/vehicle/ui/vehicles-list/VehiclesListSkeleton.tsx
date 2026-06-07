import { Grid, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { VehicleCardSkeleton } from '../vehicle-card';

export const VehiclesListSkeleton = () => {
  return (
    <Stack gap="3xl">
      <PageHeaderSkeleton />
      <Grid columns={{ mobile: '1', tablet: '2', desktop: '3' }} gap="2xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <VehicleCardSkeleton key={i} />
        ))}
      </Grid>
    </Stack>
  );
};
