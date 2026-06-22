import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { CreateReminderDto, UpdateReminderDto } from '../model';

export const reminderMutationApi = {
  create: (workspaceId: WorkspaceId, vehicleId: VehicleId, dto: CreateReminderDto) => {
    const path = ENDPOINTS.REMINDERS.CREATE(workspaceId, vehicleId);
    return apiClient.post(path, dto);
  },

  update: (
    workspaceId: WorkspaceId,
    vehicleId: VehicleId,
    reminderId: string,
    dto: UpdateReminderDto,
  ) => {
    const path = ENDPOINTS.REMINDERS.UPDATE(workspaceId, vehicleId, reminderId);
    return apiClient.patch(path, dto);
  },

  complete: (workspaceId: WorkspaceId, vehicleId: VehicleId, reminderId: string) => {
    const path = ENDPOINTS.REMINDERS.COMPLETE(workspaceId, vehicleId, reminderId);
    return apiClient.patch(path);
  },

  dismiss: (workspaceId: WorkspaceId, vehicleId: VehicleId, reminderId: string) => {
    const path = ENDPOINTS.REMINDERS.DISMISS(workspaceId, vehicleId, reminderId);
    return apiClient.patch(path);
  },

  delete: (workspaceId: WorkspaceId, vehicleId: VehicleId, reminderId: string) => {
    const path = ENDPOINTS.REMINDERS.DELETE(workspaceId, vehicleId, reminderId);
    return apiClient.delete(path);
  },
};
