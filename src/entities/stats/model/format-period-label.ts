import { STATS_PERIODS, type StatsPeriod } from '@entities/stats';

export const formatPeriodLabel = (period: StatsPeriod, date: Date, locale: string): string => {
  if (period === STATS_PERIODS.ALL) return '';

  if (period === STATS_PERIODS.MONTH) {
    return date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  }

  if (period === STATS_PERIODS.QUARTER) {
    const quarter = Math.floor(date.getMonth() / 3) + 1;
    return `Q${quarter} ${date.getFullYear()}`;
  }

  return String(date.getFullYear());
};
