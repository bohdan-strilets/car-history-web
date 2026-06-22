import type { ReminderId, ReminderType } from '@entities/reminder';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export interface CreateReminderDto {
  type: ReminderType;
  title: string;
  description?: string;
  dueDate?: string;
  dueMileage?: number;
}

export interface UpdateReminderDto {
  type?: ReminderType;
  title?: string;
  description?: string;
  dueDate?: string;
  dueMileage?: number;
}

export interface ReminderParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
}

export interface ReminderActionParams extends ReminderParams {
  reminderId: ReminderId;
  onSuccess?: () => void;
}
