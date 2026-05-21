import { VehicleConstraints } from '@entities/vehicle';
import { APP_CONSTANTS } from '@shared/config';
import { useState } from 'react';

import type { YearPickerParams } from './year-picker.types';
import { getDecades } from './year-picker.utils';

export const useYearPicker = ({
  value,
  min = VehicleConstraints.YEAR_MIN,
  max = APP_CONSTANTS.CURENT_YEAR,
}: YearPickerParams) => {
  const normalizedValue = value ? Number(value) : null;

  const [activeDec, setActiveDec] = useState(() => {
    if (normalizedValue) return Math.floor(normalizedValue / 10) * 10;
    return Math.floor(APP_CONSTANTS.CURENT_YEAR / 10) * 10;
  });

  const decades = getDecades(min, max);
  const years = Array.from({ length: 10 }, (_, i) => activeDec + i);

  const getYearState = (y: number) => ({
    isSelected: y === normalizedValue,
    isCurrent: y === APP_CONSTANTS.CURENT_YEAR,
    isDim: y < min || y > max,
  });

  return {
    activeDec,
    setActiveDec,
    decades,
    years,
    getYearState,
  };
};
