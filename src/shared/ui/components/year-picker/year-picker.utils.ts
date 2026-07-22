import { APP_CONSTANTS } from '@shared/config';
import { getDecadeStart } from '@shared/lib';

const DECADE_SIZE = 10;

export const getDecades = (min: number, max: number = APP_CONSTANTS.CURRENT_YEAR): number[] => {
  const decades: number[] = [];

  for (let d = getDecadeStart(min); d <= getDecadeStart(max); d += DECADE_SIZE) {
    decades.push(d);
  }

  return decades;
};
