import type { TirePeriod } from '@entities/tire';

export interface TireHistoryProps {
  periods: TirePeriod[];
  totalKmDriven: number;
}
