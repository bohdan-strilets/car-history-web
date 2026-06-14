import { Panel, Skeleton, Stack } from '@shared/ui';

export const EventCardSkeleton = () => {
  return (
    <Panel direction="row" align="center" justify="between" p="2xl">
      <Stack direction="row" align="center" gap="xl">
        <Skeleton width={70} height={70} />
        <Stack gap="sm">
          <Skeleton width={120} height={20} radius="sm" />
          <Skeleton width={200} height={14} radius="sm" />
          <Skeleton width={160} height={16} radius="sm" />
        </Stack>
      </Stack>

      <Skeleton width={80} height={28} radius="sm" />
    </Panel>
  );
};
