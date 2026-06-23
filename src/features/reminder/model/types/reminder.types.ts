// Params

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export interface CreateReminderFormParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage?: number;
  onSuccess?: () => void;
}

export interface OpenCreateReminderParams {
  workspaceId: string;
  vehicleId: string;
  currentMileage?: number;
}

// Props

export interface CreateReminderFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage?: number;
  onSuccess?: () => void;
}
