import type { MaintenanceId } from '@entities/maintenance-interval';
import type { VehicleId } from '@entities/vehicle';

import type { ReminderStatus, ReminderType } from './reminder.constants';

export type ReminderId = string;

export interface Reminder {
  id: ReminderId;
  vehicleId: VehicleId;
  maintenanceIntervalId: MaintenanceId | null;
  documentId: string | null;
  type: ReminderType;
  title: string;
  description: string | null;
  dueDate: string | null;
  dueMileage: number | null;
  status: ReminderStatus;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
