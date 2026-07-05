import type { Tire } from '@entities/tire';

export interface TireDetailProps {
  tire: Tire;
  onEdit?: () => void;
  onMount?: () => void;
  onUnmount?: () => void;
  onRetire?: () => void;
  onDelete?: () => void;
  isMounting?: boolean;
  isUnmounting?: boolean;
  isRetiring?: boolean;
}
