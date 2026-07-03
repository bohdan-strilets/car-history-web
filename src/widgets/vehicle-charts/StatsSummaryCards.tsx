import { useTranslation } from 'react-i18next';

import { Grid, IconBox, Panel, Stack, Text } from '@shared/ui';

import type { StatsSummaryCardsProps } from './vehicle-charts.types';

export const StatsSummaryCards = ({ stats }: StatsSummaryCardsProps) => {
  const { t } = useTranslation();

  return (
    <Grid columns={{ mobile: '2', tablet: '4' }} gap="md">
      <Panel radius="md" p="lg">
        <Stack gap="sm" align="center">
          <IconBox name="wallet" size="2xl" soft="purple" strokeWidth="medium" />
          <Text size="sm" color="tertiary">
            {t('stats.summary.totalCost')}
          </Text>
          <Text size="xl" weight="bold">
            {`${stats.totalCost.toLocaleString()} ${t('enums.currencyShort.PLN')}`}
          </Text>
        </Stack>
      </Panel>

      <Panel radius="md" p="lg">
        <Stack gap="sm" align="center">
          <IconBox name="road" size="2xl" soft="gray" strokeWidth="medium" />
          <Text size="sm" color="tertiary">
            {t('stats.summary.avgCostPerKm')}
          </Text>
          <Text size="xl" weight="bold">
            {stats.avgCostPerKm != null
              ? `${stats.avgCostPerKm.toFixed(2)} ${t('enums.currencyShort.PLN')}/${t('units.km')}`
              : '—'}
          </Text>
        </Stack>
      </Panel>

      <Panel radius="md" p="lg">
        <Stack gap="sm" align="center">
          <IconBox name="gauge" size="2xl" soft="lime" strokeWidth="medium" />
          <Text size="sm" color="tertiary">
            {t('stats.summary.fuelConsumption')}
          </Text>
          <Text size="xl" weight="bold">
            {stats.fuelConsumption.avgLPer100Km != null
              ? `${stats.fuelConsumption.avgLPer100Km.toFixed(1)} ${t('units.lper100km')}`
              : '—'}
          </Text>
        </Stack>
      </Panel>

      <Panel radius="md" p="lg">
        <Stack gap="sm" align="center">
          <IconBox name="calendar" size="2xl" soft="blue" strokeWidth="medium" />
          <Text size="sm" color="tertiary">
            {t('stats.summary.tco')}
          </Text>
          <Text size="xl" weight="bold">
            {stats.tco.totalCost != null
              ? `${stats.tco.totalCost.toLocaleString()} ${t('enums.currencyShort.PLN')}`
              : '—'}
          </Text>
        </Stack>
      </Panel>
    </Grid>
  );
};
