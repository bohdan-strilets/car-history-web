import { ReminderCardSkeleton } from '@entities/reminder';
import { VehicleCardSkeleton } from '@entities/vehicle';
import { Grid, Skeleton, Stack } from '@shared/ui';

export const DashboardOverviewSkeleton = () => (
  <Stack gap="3xl">
    <Grid columns={{ mobile: '1', tablet: '2' }} gap="lg">
      <Skeleton height={110} radius="md" />
      <Skeleton height={110} radius="md" />
    </Grid>

    <Stack gap="lg">
      <Skeleton width="180px" height="24px" radius="sm" />
      <Grid columns={{ mobile: '1', tablet: '2', desktop: '3' }} gap="2xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <VehicleCardSkeleton key={i} />
        ))}
      </Grid>
    </Stack>

    <Stack gap="lg">
      <Skeleton width="220px" height="24px" radius="sm" />
      <Stack gap="md">
        {Array.from({ length: 2 }).map((_, i) => (
          <ReminderCardSkeleton key={i} />
        ))}
      </Stack>
    </Stack>
  </Stack>
);
