import { useTranslation } from 'react-i18next';

import { Divider, Stack, Text } from '@shared/ui';

import { MaintenanceCard } from '../maintenance-card';

import type { MaintenanceListProps } from './maintenance-list.types';

export const MaintenanceList = ({
  intervals,
  currentMileage,
  onMarkDone,
  onIntervalClick,
}: MaintenanceListProps) => {
  const { t } = useTranslation();

  const active = intervals.filter((i) => i.status === 'ACTIVE');
  const disabled = intervals.filter((i) => i.status === 'DISABLED');

  return (
    <Stack gap="2xl">
      {active.length > 0 && (
        <Stack gap="md">
          {active.map((interval) => (
            <MaintenanceCard
              key={interval.id}
              interval={interval}
              currentMileage={currentMileage}
              onMarkDone={onMarkDone ? () => onMarkDone(interval) : undefined}
              onClick={onIntervalClick ? () => onIntervalClick(interval) : undefined}
            />
          ))}
        </Stack>
      )}

      {disabled.length > 0 && (
        <Stack gap="md">
          <Divider color="subtle" />
          <Text color="tertiary" size="sm" weight="semibold">
            {t('maintenance.list.disabled')}
          </Text>
          <Stack gap="md">
            {disabled.map((interval) => (
              <MaintenanceCard
                key={interval.id}
                interval={interval}
                currentMileage={currentMileage}
                onClick={onIntervalClick ? () => onIntervalClick(interval) : undefined}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
