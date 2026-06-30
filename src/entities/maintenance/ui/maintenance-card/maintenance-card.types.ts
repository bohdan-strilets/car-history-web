import type { MaintenanceInterval } from '@entities/maintenance';

export interface MaintenanceCardProps {
  interval: MaintenanceInterval;
  currentMileage: number;
  onClick?: () => void;
}
