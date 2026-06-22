import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { MaintenanceInterval } from '../model';

export const maintenanceIntervalApi = {
  getAll: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.MAINTENANCE.LIST(workspaceId, vehicleId);
    return apiClient.get<MaintenanceInterval[]>(path);
  },
};
