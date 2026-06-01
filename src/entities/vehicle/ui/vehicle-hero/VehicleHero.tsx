import { FuelLabels } from '@entities/vehicle';
import { Badge, Grid, Heading, Panel, Stack, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import type { Vehicle } from '../../model/vehicle.types';

interface VehicleHeroProps {
  vehicle: Vehicle;
}

export const VehicleHero = ({ vehicle }: VehicleHeroProps) => {
  const { t } = useTranslation();

  const today = new Date();
  const currentYear = today.getFullYear();
  const vehicleAge = currentYear - vehicle.year;
  const avgMileagePerYear =
    vehicleAge > 0 ? Math.round(vehicle.currentMileage / vehicleAge) : vehicle.currentMileage;
  const engineLiters = (vehicle.engineDisplacementCc / 1000).toFixed(1);

  return (
    <Panel gradient="accentSolid">
      <Stack gap="xl">
        <Stack direction="row" justify="between" align="start">
          <FuelLabels fuels={vehicle.fuelType} labelsType="solid" />
          <Badge gradient="gray">{vehicle.year}</Badge>
        </Stack>

        <Stack gap="xs">
          <Heading size="4xl" weight="extraBold" color="onColor">
            {vehicle.brand} {vehicle.model}
          </Heading>
          {vehicle.generation && (
            <Text color="onColor" size="lg" letterSpacing="wide">
              {vehicle.generation}
            </Text>
          )}
          {vehicle.nickname && (
            <Text color="secondary" size="sm">
              {vehicle.nickname}
            </Text>
          )}
        </Stack>

        <Grid columns={{ mobile: '2', tablet: '4' }} gap="sm">
          <Panel variant="glass" p="md" gap="none" justify="center" align="center">
            <Text color="onColor" size="2xl" weight="bold">
              {vehicle.currentMileage.toLocaleString()}
            </Text>
            <Text color="secondary" size="xs">
              {t('units.kilometers')}
            </Text>
          </Panel>

          <Panel variant="glass" p="md" gap="none" justify="center" align="center">
            <Text color="onColor" size="2xl" weight="bold">
              {vehicleAge}
            </Text>
            <Text color="secondary" size="xs">
              {t('vehicle.detail.years')}
            </Text>
          </Panel>

          <Panel variant="glass" p="md" gap="none" justify="center" align="center">
            <Text color="onColor" size="2xl" weight="bold">
              {engineLiters}L
            </Text>
            <Text color="secondary" size="xs">
              {t('vehicle.detail.engine')}
            </Text>
          </Panel>

          <Panel variant="glass" p="md" gap="none" justify="center" align="center">
            <Text color="onColor" size="2xl" weight="bold">
              ~{avgMileagePerYear.toLocaleString()}
            </Text>
            <Text color="secondary" size="xs">
              {t('vehicle.detail.kmPerYear')}
            </Text>
          </Panel>
        </Grid>
      </Stack>
    </Panel>
  );
};
