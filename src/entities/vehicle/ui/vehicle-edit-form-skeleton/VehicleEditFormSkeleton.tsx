import { Grid, Skeleton, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

export const VehicleEditFormSkeleton = () => {
  return (
    <Stack gap="3xl">
      <PageHeaderSkeleton />

      <Grid columns={{ mobile: '2', tablet: '2', laptop: '3' }} gap="lg">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} height="88px" radius="md" />
        ))}
      </Grid>

      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} height="48px" radius="md" />
      ))}

      <Skeleton height="48px" radius="md" />
    </Stack>
  );
};
