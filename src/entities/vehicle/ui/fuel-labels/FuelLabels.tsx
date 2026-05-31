import { FUEL_TYPE_CONFIG } from '@entities/vehicle/model';
import { Badge, Icon, Stack } from '@shared/ui';
import { translateConfigOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import type { FuelLabelsProps } from './fuel-labels.types';

export const FuelLabels = ({ fuels }: FuelLabelsProps) => {
  const { t } = useTranslation();
  const fuelTypes = translateConfigOptions(t, FUEL_TYPE_CONFIG);
  const currentFuelTypes = fuelTypes.filter((ft) => fuels.includes(ft.value));

  return (
    <Stack direction="row" align="center" gap="sm">
      {currentFuelTypes.map((fuel) => (
        <Badge key={fuel.id} soft={fuel.color}>
          <Icon name={fuel.icon ?? 'circleQuestionMark'} size="sm" color="inherit" />
          {fuel.label}
        </Badge>
      ))}
    </Stack>
  );
};
