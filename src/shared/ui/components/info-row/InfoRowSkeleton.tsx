import { Panel, Skeleton, Stack } from '@shared/ui';

export const InfoRowSkeleton = () => {
  return (
    <Panel
      variant="base"
      direction="row"
      align="center"
      justify="between"
      gap="md"
      p={{ mobile: 'md', tablet: 'xl' }}
    >
      <Stack direction="row" align="center" gap="md">
        <Skeleton width="40px" height="40px" radius="sm" />
        <Skeleton width="120px" height="14px" radius="md" />
      </Stack>
      <Skeleton width="80px" height="14px" radius="md" />
    </Panel>
  );
};
