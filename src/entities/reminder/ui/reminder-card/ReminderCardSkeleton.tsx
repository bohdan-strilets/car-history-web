import { useMediaQuery } from '@shared/hooks';
import { Panel, Skeleton, Stack } from '@shared/ui';

export const ReminderCardSkeleton = () => {
  const isTabletUp = useMediaQuery('tablet', 'up');

  return (
    <Panel direction={isTabletUp ? 'row' : 'column'} align="start" justify="between" p="2xl">
      <Stack direction="row" align="start" gap="xl">
        <Skeleton width={isTabletUp ? 48 : 40} height={isTabletUp ? 48 : 40} radius="md" />
        <Stack gap="md">
          <Skeleton width={180} height={20} radius="sm" />
          <Skeleton width={120} height={14} radius="sm" />
          <Stack direction="row" align="center" gap="2xl">
            <Skeleton width={100} height={16} radius="sm" />
            <Skeleton width={80} height={16} radius="sm" />
            <Skeleton width={70} height={24} radius="pill" />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" align="center" gap="sm">
        <Skeleton width={80} height={24} radius="pill" />
        <Skeleton width={20} height={20} radius="sm" />
      </Stack>
    </Panel>
  );
};
