import { Panel, Skeleton, Stack } from '@shared/ui';

import * as styles from './service-station-card.css';

export const ServiceStationCardSkeleton = () => {
  return (
    <div className={styles.clickableWrapper}>
      <Panel gap="xl">
        <Stack direction="row" align="center" justify="between">
          <Skeleton width={90} height={22} radius="pill" />
          <Skeleton width={32} height={32} radius="pill" />
        </Stack>

        <Stack gap="md" align="center">
          <Skeleton width={56} height={56} radius="lg" />
          <Stack gap="xs" align="center">
            <Skeleton width={160} height={22} />
            <Skeleton width={120} height={14} />
          </Stack>
        </Stack>

        <Stack direction="row" align="center" justify="between">
          <Skeleton width={40} height={14} />
          <Skeleton width={70} height={14} />
        </Stack>
      </Panel>
    </div>
  );
};
