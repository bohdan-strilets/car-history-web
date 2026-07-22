import { useState } from 'react';

import { APP_CONSTANTS } from '@shared/config';
import { getDecadeStart, getDecadeYears } from '@shared/lib';

import { getDecades } from './year-picker.utils';

import type { YearPickerParams } from './year-picker.types';

export const useYearPicker = ({
  value,
  min,
  max = APP_CONSTANTS.CURRENT_YEAR,
}: YearPickerParams) => {
  const normalizedValue = value ? Number(value) : null;

  const getDefaultDecade = () => {
    if (normalizedValue) return getDecadeStart(normalizedValue);

    const clampedYear = Math.min(Math.max(APP_CONSTANTS.CURRENT_YEAR, min), max);
    return getDecadeStart(clampedYear);
  };

  const rangeKey = `${min}-${max}`;

  const [prevRangeKey, setPrevRangeKey] = useState(rangeKey);
  const [activeDec, setActiveDec] = useState(getDefaultDecade);

  if (prevRangeKey !== rangeKey) {
    setPrevRangeKey(rangeKey);
    setActiveDec(getDefaultDecade());
  }

  const decades = getDecades(min, max);
  const years = getDecadeYears(activeDec);

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
