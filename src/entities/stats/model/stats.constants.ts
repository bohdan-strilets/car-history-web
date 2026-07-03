export const STATS_PERIODS = {
  MONTH: 'month',
  QUARTER: 'quarter',
  YEAR: 'year',
  ALL: 'all',
} as const;

export type StatsPeriod = (typeof STATS_PERIODS)[keyof typeof STATS_PERIODS];

export const PERIOD_STEP_MONTHS: Record<Exclude<StatsPeriod, typeof STATS_PERIODS.ALL>, number> = {
  month: 1,
  quarter: 3,
  year: 12,
};
