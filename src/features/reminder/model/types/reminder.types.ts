// Params

import type { Reminder, ReminderType } from '@entities/reminder';
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

export interface UpdateReminderFormParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  reminder: Reminder;
  onSuccess?: () => void;
}

export interface OpenEditReminderParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
}

// Props

export interface CreateReminderFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  currentMileage?: number;
  onSuccess?: () => void;
}

export interface EditReminderFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  reminder: Reminder;
  onSuccess?: () => void;
}
