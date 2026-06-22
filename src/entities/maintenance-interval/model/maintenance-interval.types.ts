import type { VehicleId } from '@entities/vehicle';

import type { MaintenanceStatus, MaintenanceType } from './maintenance-interval.constants';

export type MaintenanceId = string;

export interface MaintenanceInterval {
  id: MaintenanceId;
  vehicleId: VehicleId;
  type: MaintenanceType;
  title: string;
  intervalKm: number | null;
  intervalMonths: number | null;
  lastServiceMileage: number | null;
  lastServiceDate: string | null;
  nextServiceMileage: number | null;
  nextServiceDate: string | null;
  status: MaintenanceStatus;
  createdAt: string;
  updatedAt: string;
}
