import type { StatsPeriod } from '@entities/stats';

import { PERIOD_STEP_MONTHS, STATS_PERIODS } from './stats.constants';

export const shiftDate = (date: Date, period: StatsPeriod, direction: 1 | -1): Date => {
  if (period === STATS_PERIODS.ALL) return date;

  const shifted = new Date(date);
  shifted.setMonth(shifted.getMonth() + direction * PERIOD_STEP_MONTHS[period]);

  return shifted;
};
