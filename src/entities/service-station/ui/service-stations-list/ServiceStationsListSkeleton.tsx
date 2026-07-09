import { Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { ServiceStationCardSkeleton } from '../service-station-card';

import * as styles from './service-stations-list.css';

export const ServiceStationsListSkeleton = () => {
  return (
    <Stack gap="2xl">
      <PageHeaderSkeleton />
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ServiceStationCardSkeleton key={index} />
        ))}
      </div>
    </Stack>
  );
};
