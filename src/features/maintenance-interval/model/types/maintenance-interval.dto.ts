import type { MaintenanceId, MaintenanceType } from '@entities/maintenance-interval';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export interface CreateMaintenanceIntervalDto {
  type: MaintenanceType;
  title: string;
  intervalKm?: number;
  intervalMonths?: number;
  lastServiceMileage?: number;
  lastServiceDate?: string;
}

export interface UpdateMaintenanceIntervalDto {
  type?: MaintenanceType;
  title?: string;
  intervalKm?: number;
  intervalMonths?: number;
  lastServiceMileage?: number;
  lastServiceDate?: string;
}

export interface MaintenanceIntervalParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
}

export interface MaintenanceIntervalActionParams extends MaintenanceIntervalParams {
  maintenanceId: MaintenanceId;
  onSuccess?: () => void;
}
