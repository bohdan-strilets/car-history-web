import { useStatsPeriodStore } from './stats-period.store';

export const useStatsPeriod = () => {
  const { period, date, setPeriod, goToPreviousPeriod, goToNextPeriod } = useStatsPeriodStore();

  const formattedDate = date.toISOString().slice(0, 10);

  return {
    period,
    date: formattedDate,
    setPeriod,
    goToPreviousPeriod,
    goToNextPeriod,
  };
};
