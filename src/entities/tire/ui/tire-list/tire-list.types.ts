import type { Tire } from '@entities/tire';

export interface TireListProps {
  tires: Tire[];
  onTireClick?: (tire: Tire) => void;
  onTireDelete?: (tire: Tire) => void;
}
