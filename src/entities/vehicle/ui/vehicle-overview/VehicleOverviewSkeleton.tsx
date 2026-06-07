import { Grid, InfoRowSkeleton, Panel, Skeleton, Stack } from '@shared/ui';
import { InfoSection } from '@widgets/info-section/InfoSection';

export const VehicleOverviewSkeleton = () => {
  return (
    <>
      {/* Hero */}
      <Panel p={{ mobile: 'md', tablet: 'lg' }}>
        <Stack gap="xl">
          <Stack direction="row" justify="between" align="start">
            <Skeleton width="80px" height="28px" radius="pill" />
            <Skeleton width="60px" height="28px" radius="pill" />
          </Stack>

          <Stack gap="xs">
            <Skeleton width="70%" height="40px" radius="md" />
            <Skeleton width="40%" height="20px" radius="md" />
          </Stack>

          <Grid columns={{ mobile: '2', tablet: '4' }} gap="sm">
            {Array.from({ length: 4 }).map((_, i) => (
              <Panel key={i} variant="glass" p="md" gap="xs" justify="center" align="center">
                <Skeleton width="80px" height="28px" radius="md" />
                <Skeleton width="40px" height="14px" radius="md" />
              </Panel>
            ))}
          </Grid>
        </Stack>
      </Panel>

      {/* Fun Facts */}
      <Stack gap="xl">
        <Skeleton width="160px" height="24px" radius="md" />
        <Grid columns={{ mobile: '2', tablet: '4' }} gap="md">
          {Array.from({ length: 4 }).map((_, i) => (
            <Panel key={i} gap="xs" justify="center" align="center" p="lg">
              <Skeleton width="70px" height="28px" radius="md" />
              <Skeleton width="90px" height="14px" radius="md" />
            </Panel>
          ))}
        </Grid>
      </Stack>

      {/* Basic Info */}
      <InfoSection>
        {Array.from({ length: 4 }).map((_, i) => (
          <InfoRowSkeleton key={i} />
        ))}
      </InfoSection>
    </>
  );
};
