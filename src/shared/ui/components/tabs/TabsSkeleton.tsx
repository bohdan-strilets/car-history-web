import { Panel, Skeleton, Stack } from '@shared/ui';

export const TabsSkeleton = () => {
  return (
    <Panel direction="row" variant="neuInsetSm" p="md" radius="md">
      <Stack direction="row" gap="sm">
        {Array.from({ length: 4 }).map((_, i) => (
          <Panel key={i} variant="base" p="sm" radius="sm">
            <Stack direction="row" gap="md" align="center">
              <Skeleton width="16px" height="16px" radius="sm" />
              <Skeleton width="60px" height="12px" />
            </Stack>
          </Panel>
        ))}
      </Stack>
    </Panel>
  );
};
