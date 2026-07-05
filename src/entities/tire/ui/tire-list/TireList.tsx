import { useTranslation } from 'react-i18next';

import { Heading, Stack } from '@shared/ui';

import { TIRE_STATUS, type TireStatus } from '../../model';
import { TireCard } from '../tire-card';

import * as styles from './tire-list.css';

import type { TireListProps } from './tire-list.types';

const STATUS_ORDER: TireStatus[] = [TIRE_STATUS.MOUNTED, TIRE_STATUS.STORED, TIRE_STATUS.RETIRED];

export const TireList = ({ tires, onTireClick, onTireDelete }: TireListProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap="2xl">
      {STATUS_ORDER.map((status) => {
        const group = tires.filter((tire) => tire.status === status);
        if (group.length === 0) return null;

        return (
          <div key={status} className={styles.section}>
            <Heading size="lg" weight="semibold">
              {t(`enums.tireStatus.${status}`)}
            </Heading>
            <div className={styles.grid}>
              {group.map((tire) => (
                <TireCard
                  key={tire.id}
                  tire={tire}
                  onClick={() => onTireClick?.(tire)}
                  onDelete={onTireDelete ? () => onTireDelete(tire) : undefined}
                />
              ))}
            </div>
          </div>
        );
      })}
    </Stack>
  );
};
