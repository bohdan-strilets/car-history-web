import { useTranslation } from 'react-i18next';

import { useFormatDate } from '@entities/workspace';
import { Badge, Stack, Text } from '@shared/ui';

import * as styles from './tire-history.css';

import type { TireHistoryProps } from './tire-history.types';

export const TireHistoryList = ({ periods, totalKmDriven }: TireHistoryProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  if (periods.length === 0) {
    return (
      <Text size="sm" color="tertiary">
        {t('tire.history.empty')}
      </Text>
    );
  }

  return (
    <Stack gap="md">
      <Stack direction="row" justify="between" align="center">
        <Text size="sm" color="tertiary">
          {t('tire.history.totalKm')}
        </Text>
        <Text weight="semibold">
          {totalKmDriven.toLocaleString()} {t('units.km')}
        </Text>
      </Stack>

      <div className={styles.list}>
        {periods
          .slice()
          .reverse()
          .map((period, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.rowLeft}>
                <Text size="sm" weight="medium">
                  {formatDate(period.installedAt)} →{' '}
                  {period.isOngoing ? t('tire.history.ongoing') : formatDate(period.removedAt!)}
                </Text>
                <Text size="xs" color="tertiary">
                  {period.installedMileage != null
                    ? `${period.installedMileage.toLocaleString()} ${t('units.km')}`
                    : t('tire.history.unknownMileage')}
                  {' → '}
                  {period.removedMileage != null
                    ? `${period.removedMileage.toLocaleString()} ${t('units.km')}`
                    : period.isOngoing
                      ? t('tire.history.now')
                      : t('tire.history.unknownMileage')}
                </Text>
              </div>

              <div className={styles.rowRight}>
                {period.isOngoing && (
                  <Badge soft="accent" size="sm">
                    {t('tire.history.ongoing')}
                  </Badge>
                )}
                {period.kmDriven != null && (
                  <Text size="sm" weight="semibold">
                    {period.kmDriven.toLocaleString()} {t('units.km')}
                  </Text>
                )}
                {period.daysDriven != null && (
                  <Text size="xs" color="tertiary">
                    {period.daysDriven} {t('units.days', { count: period.daysDriven })}
                  </Text>
                )}
              </div>
            </div>
          ))}
      </div>
    </Stack>
  );
};
