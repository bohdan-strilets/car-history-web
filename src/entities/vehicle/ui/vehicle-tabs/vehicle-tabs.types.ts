import type { RefuelType, Vehicle } from '@entities/vehicle';

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
}
