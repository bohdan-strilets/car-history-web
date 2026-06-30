import type { MaintenanceInterval } from '../../model';

export interface MaintenanceDetailProps {
  interval: MaintenanceInterval;
  currentMileage: number;
  onMarkDone?: () => void;
  onEdit?: () => void;
  onDisable?: () => void;
  onEnable?: () => void;
  onDelete?: () => void;
}
