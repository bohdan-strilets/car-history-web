import type { Vehicle } from '@entities/vehicle';

export interface OverviewTabProps {
  vehicle: Vehicle;
  workspaceId: string;
  vehicleId: string;
  canEdit: boolean;
  canDelete: boolean;
}
