import { Grid, Panel, Skeleton, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { StatsPeriodFilterSkeleton } from '../stats-period-filter';

export const StatsSkeleton = () => (
  <Stack gap="xl">
    <PageHeaderSkeleton />
    <Stack gap="md">
      <StatsPeriodFilterSkeleton />

      <Grid columns={{ mobile: '2', tablet: '4' }} gap="md">
        {Array.from({ length: 4 }).map((_, index) => (
          <Panel key={index} radius="md" p="lg">
            <Stack gap="sm" align="center">
              <Skeleton width="44px" height="44px" radius="lg" />
              <Skeleton width="80%" height="14px" radius="sm" />
              <Skeleton width="60%" height="20px" radius="sm" />
            </Stack>
          </Panel>
        ))}
      </Grid>

      <Skeleton width="100%" height="44px" radius="lg" />

      <Panel>
        <Stack gap="lg">
          <Skeleton width="180px" height="20px" radius="sm" />
          <Skeleton width="100%" height="280px" radius="md" />
        </Stack>
      </Panel>
    </Stack>
  </Stack>
);
