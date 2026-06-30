import type { MaintenanceInterval, MaintenanceType } from '@entities/maintenance';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

// Params

export interface CreateMaintenanceIntervalFormParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage: number;
  onSuccess?: () => void;
}

export interface MaintenanceTitleContext {
  type: MaintenanceType;
  intervalKm?: number;
  intervalMonths?: number;
  lastServiceMileage?: number;
}

export interface OpenCreateMaintenanceIntervalParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage: number;
}

export interface OpenMaintenanceDetailParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage: number;
}

// Props

export interface CreateMaintenanceIntervalFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage: number;
  onSuccess?: () => void;
}

export interface MaintenanceDetailModalProps {
  interval: MaintenanceInterval;
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage: number;
}
