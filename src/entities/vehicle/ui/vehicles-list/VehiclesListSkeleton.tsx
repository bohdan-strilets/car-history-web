import { Grid } from '@shared/ui';

import { VehicleCardSkeleton } from '../vehicle-card';

export const VehiclesListSkeleton = () => {
  return (
    <Grid columns={{ mobile: '1', tablet: '2', desktop: '3' }} gap="2xl">
      {Array.from({ length: 5 }).map((_, i) => (
        <VehicleCardSkeleton key={i} />
      ))}
    </Grid>
  );
};
