import { useTranslation } from 'react-i18next';

import { Panel, Stack, Text } from '@shared/ui';

import type { FuelCostByTypeCardProps } from './vehicle-charts.types';

export const FuelCostByTypeCard = ({ fuelCostByType }: FuelCostByTypeCardProps) => {
  const { t } = useTranslation();

  if (!fuelCostByType || fuelCostByType.length === 0) return null;

  return (
    <Panel>
      <Stack gap="lg">
        <Text weight="bold" size="lg">
          {t('stats.summary.fuelCostByType')}
        </Text>

        <Stack gap="md">
          {fuelCostByType.map((row) => (
            <Stack key={row.fuelType} direction="row" align="center" justify="between">
              <Text size="md">{t(`enums.fuelType.${row.fuelType}`)}</Text>
              <Stack direction="row" align="center" gap="lg">
                <Text size="sm" color="tertiary">
                  {row.totalLiters} {t('units.liters')}
                </Text>
                <Text size="sm" color="tertiary">
                  {row.avgPricePerLiter} {t('enums.currencyShort.PLN')}/{t('units.liters')}
                </Text>
                <Text size="md" weight="bold">
                  {row.totalCost.toLocaleString()} {t('enums.currencyShort.PLN')}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Panel>
  );
};
