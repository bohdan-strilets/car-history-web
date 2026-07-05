import type { Tire } from '@entities/tire';

export interface TireCardProps {
  tire: Tire;
  onClick?: () => void;
  onDelete?: () => void;
}
