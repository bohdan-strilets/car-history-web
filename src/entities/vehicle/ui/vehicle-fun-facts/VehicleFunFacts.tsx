import { Grid, Heading, Panel, Stack, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import type { Vehicle } from '../../model/vehicle.types';

interface VehicleFunFactsProps {
  vehicle: Vehicle;
}

export const VehicleFunFacts = ({ vehicle }: VehicleFunFactsProps) => {
  const { t } = useTranslation();

  const today = new Date();
  const currentYear = today.getFullYear();
  const vehicleAge = currentYear - vehicle.year;
  const avgMileagePerYear =
    vehicleAge > 0 ? Math.round(vehicle.currentMileage / vehicleAge) : vehicle.currentMileage;

  const oilChanges = Math.floor(vehicle.currentMileage / 10000);
  const earthCircumferences = (vehicle.currentMileage / 40075).toFixed(1);
  const moonProgress = Math.min(Math.round((vehicle.currentMileage / 384400) * 100), 100);
  const vsPoland = Math.round((avgMileagePerYear / 15000) * 100);

  const purchaseDate = vehicle.purchaseInfo?.date ? new Date(vehicle.purchaseInfo.date) : null;
  const daysOwned = purchaseDate
    ? Math.floor((today.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24))
    : null;
  const monthsOwned = daysOwned !== null ? Math.floor(daysOwned / 30) : null;

  const combinedConsumption = vehicle.specs?.combinedConsumption;
  const fuelCostEstimate = combinedConsumption
    ? Math.round((vehicle.currentMileage / 100) * combinedConsumption * 6.5)
    : null;

  const facts = [
    { value: `${oilChanges}×`, label: t('vehicle.detail.funFacts.oilChanges') },
    { value: `${earthCircumferences}×`, label: t('vehicle.detail.funFacts.earthCircumferences') },
    { value: `${moonProgress}%`, label: t('vehicle.detail.funFacts.toMoon') },
    { value: `${vsPoland}%`, label: t('vehicle.detail.funFacts.vsPoland') },
    ...(daysOwned !== null
      ? [{ value: String(daysOwned), label: t('vehicle.detail.funFacts.daysOwned') }]
      : []),
    ...(monthsOwned !== null
      ? [{ value: String(monthsOwned), label: t('vehicle.detail.funFacts.monthsOwned') }]
      : []),
    ...(fuelCostEstimate !== null
      ? [
          {
            value: `~${fuelCostEstimate.toLocaleString()}`,
            label: t('vehicle.detail.funFacts.fuelCostEstimate'),
          },
        ]
      : []),
  ];

  return (
    <Stack gap="xl">
      <Heading size="xl">{t('vehicle.detail.funFacts.title')}</Heading>
      <Grid columns={{ mobile: '2', tablet: '4' }} gap="md">
        {facts.map((fact) => (
          <Panel key={fact.label} gap="none" justify="center" align="center" p="lg">
            <Text size="2xl" weight="bold">
              {fact.value}
            </Text>
            <Text color="secondary" size="xs">
              {fact.label}
            </Text>
          </Panel>
        ))}
      </Grid>
    </Stack>
  );
};
