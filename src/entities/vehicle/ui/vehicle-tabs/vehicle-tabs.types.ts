import type { FuelType, RefuelType, Vehicle, VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export interface OverviewTabProps {
  vehicle: Vehicle;
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  canEdit: boolean;
  canDelete: boolean;
}

export interface TimelineTabProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage: number;
  fuelType: RefuelType;
  vehicleFuelType?: FuelType[];
  isSold: boolean;
}

export interface RemindersTabProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage?: number;
  isSold: boolean;
}

export interface MaintenanceTabProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage: number;
}

export interface GalleryTabProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
}
