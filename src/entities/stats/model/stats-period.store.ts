import { create } from 'zustand';

import { STATS_PERIODS, type StatsPeriodActions, type StatsPeriodState } from '@entities/stats';

import { shiftDate } from './stats-period.utils';

export const useStatsPeriodStore = create<StatsPeriodState & StatsPeriodActions>((set, get) => ({
  period: STATS_PERIODS.MONTH,
  date: new Date(),

  setPeriod: (period) => set({ period }),

  goToPreviousPeriod: () => {
    const { period, date } = get();
    set({ date: shiftDate(date, period, -1) });
  },

  goToNextPeriod: () => {
    const { period, date } = get();
    set({ date: shiftDate(date, period, 1) });
  },

  resetToToday: () => set({ date: new Date() }),
}));
