import type { MaintenanceInterval } from '../../model';

export interface MaintenanceListProps {
  intervals: MaintenanceInterval[];
  currentMileage: number;
  onMarkDone?: (interval: MaintenanceInterval) => void;
  onIntervalClick?: (interval: MaintenanceInterval) => void;
}
