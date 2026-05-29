import { Panel, Skeleton, Stack } from '@shared/ui';

export const MemberRowSkeleton = () => {
  return (
    <Panel direction="row" align="center" justify="between" gap="lg">
      <Stack direction="row" align="center" gap="md">
        <Skeleton width="40px" height="40px" radius="pill" />

        <Stack gap="none">
          <Stack direction="row" align="center" gap="sm">
            <Skeleton width="120px" height="16px" />
          </Stack>
          <Skeleton width="160px" height="14px" />
        </Stack>
      </Stack>

      <Stack direction="row" align="center" gap="md">
        <Skeleton width="70px" height="24px" radius="pill" />
      </Stack>
    </Panel>
  );
};
