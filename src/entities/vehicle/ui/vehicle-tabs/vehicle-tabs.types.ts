import type { FuelType, RefuelType, Vehicle } from '@entities/vehicle';

export interface OverviewTabProps {
  vehicle: Vehicle;
  workspaceId: string;
  vehicleId: string;
  canEdit: boolean;
  canDelete: boolean;
}

export interface TimelineTabProps {
  workspaceId: string;
  vehicleId: string;
  currentMileage: number;
  fuelType: RefuelType;
  vehicleFuelType?: FuelType[];
  isSold: boolean;
}

export interface RemindersTabProps {
  workspaceId: string;
  vehicleId: string;
  currentMileage?: number;
  isSold: boolean;
}

export interface MaintenanceTabProps {
  workspaceId: string;
  vehicleId: string;
  currentMileage: number;
}
