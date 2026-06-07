import { Skeleton, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

export const VehicleSpecsFormSkeleton = () => {
  return (
    <Stack gap="3xl">
      <PageHeaderSkeleton />

      <Stack gap="md">
        <Skeleton width="140px" height="20px" radius="md" />
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} height="48px" radius="md" />
        ))}
      </Stack>

      <Stack gap="md">
        <Skeleton width="140px" height="20px" radius="md" />
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} height="48px" radius="md" />
        ))}
      </Stack>

      <Skeleton height="48px" radius="md" />
    </Stack>
  );
};
