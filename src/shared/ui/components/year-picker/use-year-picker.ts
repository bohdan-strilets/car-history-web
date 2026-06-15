import { useState } from 'react';

import { VehicleConstraints } from '@entities/vehicle';
import { APP_CONSTANTS } from '@shared/config';

import { getDecades } from './year-picker.utils';

import type { YearPickerParams } from './year-picker.types';

export const useYearPicker = ({
  value,
  min = VehicleConstraints.YEAR_MIN,
  max = APP_CONSTANTS.CURRENT_YEAR,
}: YearPickerParams) => {
  const normalizedValue = value ? Number(value) : null;

  const getDecadeFor = (year: number) => Math.floor(year / 10) * 10;

  const getDefaultDecade = () => {
    if (normalizedValue) return getDecadeFor(normalizedValue);

    const clampedYear = Math.min(Math.max(APP_CONSTANTS.CURRENT_YEAR, min), max);
    return getDecadeFor(clampedYear);
  };

  const rangeKey = `${min}-${max}`;

  const [prevRangeKey, setPrevRangeKey] = useState(rangeKey);
  const [activeDec, setActiveDec] = useState(getDefaultDecade);

  if (prevRangeKey !== rangeKey) {
    setPrevRangeKey(rangeKey);
    setActiveDec(getDefaultDecade());
  }

  const decades = getDecades(min, max);
  const years = Array.from({ length: 10 }, (_, i) => activeDec + i);

  const getYearState = (y: number) => ({
    isSelected: y === normalizedValue,
    isCurrent: y === APP_CONSTANTS.CURRENT_YEAR,
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
