import { Box, Panel, Skeleton, Stack } from '@shared/ui';

export const VehicleCardSkeleton = () => {
  return (
    <Panel p="none">
      <Skeleton radius="md" height={245} />

      <Box p="lg">
        <Stack gap="xl">
          <Stack direction="row" align="center" justify="between">
            <Stack direction="row" gap="sm">
              <Skeleton width="60px" height="24px" radius="pill" />
              <Skeleton width="60px" height="24px" radius="pill" />
            </Stack>
            <Skeleton width="80px" height="20px" radius="sm" />
          </Stack>

          <Stack direction={{ mobile: 'column', tablet: 'row' }} gap="sm">
            <Skeleton width="full" height="40px" radius="sm" />
            <Skeleton width="full" height="40px" radius="sm" />
            <Skeleton width="full" height="40px" radius="sm" />
          </Stack>
        </Stack>
      </Box>
    </Panel>
  );
};
