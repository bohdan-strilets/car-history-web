import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { Reminder } from '../model';

export const reminderApi = {
  getAll: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.REMINDERS.LIST(workspaceId, vehicleId);
    return apiClient.get<Reminder[]>(path);
  },
};
