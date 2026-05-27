import { Panel, Skeleton, Stack } from '@shared/ui';

export const WorkspaceCardSkeleton = () => {
  return (
    <Panel gap="xl">
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" gap="xs">
          <Skeleton width="60px" height="14px" />
          <Skeleton width="80px" height="12px" />
        </Stack>
        <Stack direction="row" align="center" gap="xs">
          <Skeleton width="70px" height="22px" radius="pill" />
        </Stack>
      </Stack>

      <Stack gap="md" align="center">
        <Skeleton width="40px" height="40px" radius="md" />
        <Skeleton width="120px" height="24px" />
      </Stack>

      <Stack direction="row" align="center" gap="sm">
        <Skeleton width="16px" height="16px" />
        <Skeleton width="80px" height="14px" />
      </Stack>
    </Panel>
  );
};
