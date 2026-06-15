import { VehicleConstraints } from '@entities/vehicle';
import { APP_CONSTANTS } from '@shared/config';

export const getDecades = (
  min: number = VehicleConstraints.YEAR_MIN,
  max: number = APP_CONSTANTS.CURRENT_YEAR,
): number[] => {
  const decades: number[] = [];

  for (let d = Math.floor(min / 10) * 10; d <= Math.floor(max / 10) * 10; d += 10) {
    decades.push(d);
  }

  return decades;
};
