import type { Tire, TirePeriod } from '@entities/tire';

export interface TireDetailProps {
  tire: Tire;
  periods?: TirePeriod[];
  totalKmDriven?: number;
  isHistoryLoading?: boolean;
  onEdit?: () => void;
  onRetire?: () => void;
  onDelete?: () => void;
  isRetiring?: boolean;
  canDelete?: boolean;
}
