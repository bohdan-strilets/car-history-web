import { useMediaQuery } from '@shared/hooks';
import { Panel, Skeleton, Stack } from '@shared/ui';

export const MaintenanceCardSkeleton = () => {
  const isTabletUp = useMediaQuery('tablet', 'up');

  return (
    <Panel
      direction={isTabletUp ? 'row' : 'column'}
      align={isTabletUp ? 'center' : 'start'}
      justify="between"
      p="2xl"
    >
      <Stack direction="row" align="start" gap="xl">
        <Skeleton width={isTabletUp ? 48 : 40} height={isTabletUp ? 48 : 40} radius="md" />
        <Stack gap="md">
          <Stack gap="xs">
            <Skeleton width={160} height={20} radius="sm" />
            <Skeleton width={100} height={14} radius="sm" />
          </Stack>
          <Stack direction="row" align="center" gap="xl">
            <Skeleton width={90} height={16} radius="sm" />
            <Skeleton width={90} height={16} radius="sm" />
            <Skeleton width={70} height={16} radius="sm" />
          </Stack>
          <Skeleton width={80} height={22} radius="pill" />
        </Stack>
      </Stack>
      <Skeleton width={120} height={32} radius="md" />
    </Panel>
  );
};
