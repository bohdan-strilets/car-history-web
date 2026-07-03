import { useTranslation } from 'react-i18next';

import { Icon, Panel, Stack, Text } from '@shared/ui';

import type { ServiceStationsCostListProps } from './vehicle-charts.types';

export const ServiceStationsCostList = ({ stations }: ServiceStationsCostListProps) => {
  const { t } = useTranslation();

  if (stations.length === 0) return null;

  return (
    <Panel>
      <Stack gap="lg">
        <Text weight="bold" size="lg">
          {t('stats.summary.costsByServiceStation')}
        </Text>

        <Stack gap="sm">
          {stations.map((station) => (
            <Stack
              key={station.serviceStationId}
              direction="row"
              align="center"
              justify="between"
              gap="md"
            >
              <Stack direction="row" align="center" gap="sm">
                <Icon name="mapPin" size="sm" color="tertiary" strokeWidth="medium" />
                <Text size="md">{station.name}</Text>
                <Text size="xs" color="tertiary">
                  ({station.visitCount} {t('stats.charts.visits')})
                </Text>
              </Stack>
              <Text size="md" weight="bold">
                {station.totalCost.toLocaleString()} {t('enums.currencyShort.PLN')}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Panel>
  );
};
