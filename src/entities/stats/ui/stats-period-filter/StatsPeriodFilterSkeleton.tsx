import { Skeleton, Stack, TabsSkeleton } from '@shared/ui';

export const StatsPeriodFilterSkeleton = () => {
  return (
    <Stack gap="lg">
      <TabsSkeleton />

      <Stack direction="row" align="center" justify="between">
        <Skeleton width="40px" height="40px" radius="pill" />
        <Skeleton width="120px" height="20px" radius="sm" />
        <Skeleton width="40px" height="40px" radius="pill" />
      </Stack>
    </Stack>
  );
};
