import { APP_CONSTANTS } from '@shared/config';

import type { GenerationYearRangeParams } from './types';

const GENERATION_YEAR_PATTERN = /\((\d{4})[-–](\d{4}|–)?\)/;

export const getGenerationYearRange = (
  generation: string | undefined,
): GenerationYearRangeParams => {
  if (!generation) {
    return { startYear: null, endYear: null };
  }

  const match = generation.match(GENERATION_YEAR_PATTERN);

  if (!match) {
    return { startYear: null, endYear: null };
  }

  const startYear = Number(match[1]);
  const endYearRaw = match[2];

  const endYear =
    endYearRaw && endYearRaw !== '–' ? Number(endYearRaw) : APP_CONSTANTS.CURRENT_YEAR;

  return { startYear, endYear };
};
