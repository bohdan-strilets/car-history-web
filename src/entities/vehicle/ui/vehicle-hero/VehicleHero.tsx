import { useTranslation } from 'react-i18next';

import { FuelLabels } from '@entities/vehicle';
import { Badge, Box, Grid, Heading, Panel, Stack, Surface, Text } from '@shared/ui';

import type { VehicleHeroProps } from './vehicle-hero.types';

export const VehicleHero = ({ vehicle, actions }: VehicleHeroProps) => {
  const { t } = useTranslation();
  const today = new Date();
  const currentYear = today.getFullYear();
  const vehicleAge = currentYear - vehicle.year;
  const avgMileagePerYear =
    vehicleAge > 0 ? Math.round(vehicle.currentMileage / vehicleAge) : vehicle.currentMileage;
  const engineLiters = (vehicle.engineDisplacementCc / 1000).toFixed(1);

  const hasPhoto = Boolean(vehicle.primaryPhotoUrl);
  const photoStyle = hasPhoto
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%), url(${vehicle.primaryPhotoUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  return (
    <Surface gradient={hasPhoto ? undefined : 'accentSolid'} radius="lg" style={photoStyle}>
      <Box p={{ mobile: 'md', tablet: 'lg' }}>
        <Stack gap="xl">
          <Stack direction="row" justify="between" align="center">
            <FuelLabels fuels={vehicle.fuelType} labelsType="solid" />
            <Stack direction="row" gap="xs" align="center">
              <Badge gradient="gray">{vehicle.year}</Badge>
              {actions}
            </Stack>
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
                km
              </Text>
            </Panel>
            <Panel variant="glass" p="md" gap="none" justify="center" align="center">
              <Text color="onColor" size="2xl" weight="bold">
                {vehicleAge}
              </Text>
              <Text color="secondary" size="xs">
                {t('vehicle.detail.funFacts.years')}
              </Text>
            </Panel>
            <Panel variant="glass" p="md" gap="none" justify="center" align="center">
              <Text color="onColor" size="2xl" weight="bold">
                {engineLiters}L
              </Text>
              <Text color="secondary" size="xs">
                {t('vehicle.detail.funFacts.engine')}
              </Text>
            </Panel>
            <Panel variant="glass" p="md" gap="none" justify="center" align="center">
              <Text color="onColor" size="2xl" weight="bold">
                ~{avgMileagePerYear.toLocaleString()}
              </Text>
              <Text color="secondary" size="xs">
                {t('vehicle.detail.funFacts.kmPerYear')}
              </Text>
            </Panel>
          </Grid>
        </Stack>
      </Box>
    </Surface>
  );
};
