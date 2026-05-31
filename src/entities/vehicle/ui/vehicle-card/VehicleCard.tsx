import {
  BODY_TYPE_CONFIG,
  DRIVE_TYPE_CONFIG,
  FuelLabels,
  TRANSMISSION_CONFIG,
} from '@entities/vehicle';
import { useAuth } from '@shared/store/auth';
import { Avatar, Badge, Box, Icon, Panel, Stack, Surface, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import type { VehicleCardProps } from './vehicle-card.types';

export const VehicleCard = ({ vehicle, onClick }: VehicleCardProps) => {
  const { t } = useTranslation();

  const { user } = useAuth();
  const currentUserId = user?.id;

  const bodyType = getConfigOption(t, BODY_TYPE_CONFIG, vehicle.bodyType);
  const driveType = getConfigOption(t, DRIVE_TYPE_CONFIG, vehicle.driveType);
  const transmission = getConfigOption(t, TRANSMISSION_CONFIG, vehicle.transmission);

  const vehicleName = `${vehicle.brand} ${vehicle.model}`;

  const isGeneration = Boolean(vehicle.generation);
  const isNickname = Boolean(vehicle.nickname);
  const isOwnedByOther = currentUserId && vehicle.ownerId !== currentUserId;
  const mileageFormatted = vehicle.currentMileage.toLocaleString();

  return (
    <Panel p="none" onClick={onClick} hoverable>
      <Surface gradient="accentSolid" radius="md">
        <Box p="lg">
          <Stack align="end">
            <Badge gradient="gray">{vehicle.year}</Badge>
          </Stack>

          <Stack
            direction="column"
            align="start"
            justify="end"
            gap="xs"
            style={{ height: '165px' }}
          >
            <Text size="3xl" weight="extraBold" color="onColor">
              {vehicleName}
            </Text>
            <Text color="onColor" size="sm">
              {isGeneration && `${vehicle.generation} · `}
              {mileageFormatted} km
            </Text>
            {isNickname && (
              <Text color="onColor" size="xs" style={{ opacity: 0.7 }}>
                {vehicle.nickname}
              </Text>
            )}
          </Stack>

          {isOwnedByOther && (
            <Panel variant="glass" direction="row" align="center" gap="xs" p="sm">
              <Avatar
                avatarUrl={vehicle.owner.avatarUrl}
                firstName={vehicle.owner.firstName}
                lastName={vehicle.owner.lastName}
                size="sm"
              />
              <Text color="onColor" size="xs">
                {vehicle.owner.firstName} {vehicle.owner.lastName}
              </Text>
            </Panel>
          )}
        </Box>
      </Surface>

      <Box p="lg">
        <Stack gap="xl">
          <Stack direction="row" align="center" justify="between">
            <FuelLabels fuels={vehicle.fuelType} />
            <Text weight="bold" transform="uppercase">
              {vehicle.plateNumber}
            </Text>
          </Stack>

          <Stack direction={{ mobile: 'column', tablet: 'row' }} gap="sm">
            <Panel
              width="full"
              direction="row"
              align="center"
              justify="center"
              gap={{ mobile: 'xs', laptop: 'sm' }}
              variant="neuInsetSm"
              p={{ mobile: 'sm', tablet: 'lg' }}
            >
              <Icon
                name={bodyType?.icon ?? 'circleQuestionMark'}
                size="sm"
                color={bodyType?.color}
              />
              <Text size="sm">{bodyType?.label}</Text>
            </Panel>
            <Panel
              width="full"
              direction="row"
              align="center"
              justify="center"
              gap={{ mobile: 'xs', laptop: 'sm' }}
              variant="neuInsetSm"
              p={{ mobile: 'sm', tablet: 'lg' }}
            >
              <Icon
                name={transmission?.icon ?? 'circleQuestionMark'}
                size="sm"
                color={transmission?.color}
              />
              <Text size="sm">{transmission?.label}</Text>
            </Panel>
            <Panel
              width="full"
              direction="row"
              align="center"
              justify="center"
              gap={{ mobile: 'xs', laptop: 'sm' }}
              variant="neuInsetSm"
              p={{ mobile: 'sm', tablet: 'lg' }}
            >
              <Icon
                name={driveType?.icon ?? 'circleQuestionMark'}
                size="sm"
                color={driveType?.color}
              />
              <Text size="sm">{driveType?.label}</Text>
            </Panel>
          </Stack>
        </Stack>
      </Box>
    </Panel>
  );
};
