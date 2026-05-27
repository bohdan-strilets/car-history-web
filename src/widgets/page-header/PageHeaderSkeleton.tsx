import { Box, Skeleton, Stack } from '@shared/ui';

export const PageHeaderSkeleton = () => {
  return (
    <Box p="lg">
      <Stack gap="md">
        <Stack
          direction={{ mobile: 'column', tablet: 'row' }}
          justify="between"
          align="center"
          gap="md"
        >
          <Skeleton width="200px" height="40px" />
          <Skeleton width="140px" height="48px" radius="pill" />
        </Stack>

        <Skeleton width="80px" height="14px" />
      </Stack>
    </Box>
  );
};
