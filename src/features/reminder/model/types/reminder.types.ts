// Params

import type { ReminderType } from '@entities/reminder';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export interface CreateReminderFormParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage?: number;
  onSuccess?: () => void;
}

export interface OpenCreateReminderParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage?: number;
}

export interface ReminderTitleContext {
  type: ReminderType;
  dueDate?: string;
  dueMileage?: number;
}

// Props

export interface CreateReminderFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage?: number;
  onSuccess?: () => void;
}
