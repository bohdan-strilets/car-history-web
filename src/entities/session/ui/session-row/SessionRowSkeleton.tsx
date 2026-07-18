import { Panel, Skeleton, Stack } from '@shared/ui';

export const SessionRowSkeleton = () => {
  return (
    <Panel
      direction="row"
      align="center"
      justify="between"
      gap="lg"
      p={{ mobile: 'sm', tablet: 'md' }}
    >
      <Stack direction="row" align="center" gap="md">
        <Skeleton width={24} height={24} radius="sm" />
        <Stack gap="sm">
          <Skeleton width={140} height={16} radius="sm" />
          <Skeleton width={100} height={12} radius="sm" />
        </Stack>
      </Stack>

      <Skeleton width={32} height={32} radius="md" />
    </Panel>
  );
};
