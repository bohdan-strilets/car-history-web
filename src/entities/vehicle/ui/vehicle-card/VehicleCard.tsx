import { type Vehicle } from '@entities/vehicle';
import { Badge, Stack, Surface, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

interface VehicleCardProps {
  vehicle: Vehicle;
  onClick?: () => void;
}

export const VehicleCard = ({ vehicle, onClick }: VehicleCardProps) => {
  const { t } = useTranslation();

  return (
    <Surface onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <Stack gap="sm">
        <Stack direction="row" justify="between" align="center">
          <Stack gap="xs">
            <Text weight="semibold" size="lg">
              {vehicle.brand} {vehicle.model}
            </Text>
            <Text size="sm" color="tertiary">
              {vehicle.year} · {vehicle.plateNumber}
            </Text>
          </Stack>
          {vehicle.nickname && <Badge>{vehicle.nickname}</Badge>}
        </Stack>
        <Stack direction="row" gap="sm">
          {vehicle.fuelType.map((ft) => (
            <Badge key={ft} soft="accent">
              {t(`vehicle.fuelType.${ft}`)}
            </Badge>
          ))}
          <Text size="sm" color="tertiary">
            {vehicle.currentMileage.toLocaleString()} km
          </Text>
        </Stack>
      </Stack>
    </Surface>
  );
};
