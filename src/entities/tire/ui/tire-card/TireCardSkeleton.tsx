import { Skeleton, Stack } from '@shared/ui';

import * as styles from './tire-card.css';

export const TireCardSkeleton = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Skeleton width="70%" height={16} />
          <div className={styles.size}>
            <Skeleton width="40%" height={12} />
          </div>
        </div>

        <Skeleton width={72} height={22} radius="pill" />
      </div>

      <div className={styles.footer}>
        <Skeleton width={64} height={20} radius="pill" />

        <Stack direction="row" align="center" gap="sm">
          <Skeleton width={20} height={12} />
        </Stack>
      </div>
    </div>
  );
};
