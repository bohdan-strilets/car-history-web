import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { Tire } from '../model';

export const tireApi = {
  getAll: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.TIRES.LIST(workspaceId, vehicleId);
    return apiClient.get<Tire[]>(path);
  },
};
