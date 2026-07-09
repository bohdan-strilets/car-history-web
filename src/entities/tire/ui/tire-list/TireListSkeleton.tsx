import { Skeleton, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { TireCardSkeleton } from '../tire-card';

import * as styles from './tire-list.css';

export const TireListSkeleton = () => {
  return (
    <Stack gap="2xl">
      <PageHeaderSkeleton />

      <div className={styles.section}>
        <Skeleton width={120} height={22} />
        <div className={styles.grid}>
          {Array.from({ length: 5 }).map((_, index) => (
            <TireCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </Stack>
  );
};
