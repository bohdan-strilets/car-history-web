import { useTranslation } from 'react-i18next';

import type { StatsPeriod } from '@entities/stats';
import { formatPeriodLabel, STATS_PERIODS, useStatsPeriod } from '@entities/stats';
import type { SegmentControlOption } from '@shared/ui';
import { Button, Stack, Tabs, Text } from '@shared/ui';

export const StatsPeriodFilter = () => {
  const { t, i18n } = useTranslation();
  const { period, date, setPeriod, goToPreviousPeriod, goToNextPeriod } = useStatsPeriod();

  const label = formatPeriodLabel(period, new Date(date), i18n.language);

  const periodOptions: SegmentControlOption<StatsPeriod>[] = Object.values(STATS_PERIODS).map(
    (option) => ({
      value: option,
      label: t(`stats.period.${option}`),
      displayLabel: t(`stats.period.${option}`),
    }),
  );

  return (
    <Stack gap="lg">
      <Tabs tabs={periodOptions} activeTab={period} onChange={setPeriod} />

      {period !== STATS_PERIODS.ALL && (
        <Stack direction="row" align="center" justify="between">
          <Button
            onClick={goToPreviousPeriod}
            leftIcon="chevronLeft"
            variant="soft"
            color="gray"
            iconOnly
          />

          <Text weight="bold" size="md">
            {label}
          </Text>

          <Button
            onClick={goToNextPeriod}
            rightIcon="chevronRight"
            variant="soft"
            color="gray"
            iconOnly
          />
        </Stack>
      )}
    </Stack>
  );
};
