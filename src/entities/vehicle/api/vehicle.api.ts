import type { Vehicle, VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient, ENDPOINTS } from '@shared/api';

export const vehicleApi = {
  getAll: (workspaceId: WorkspaceId) => {
    const path = ENDPOINTS.VEHICLES.LIST(workspaceId);
    return apiClient.get<Vehicle[]>(path);
  },

  getById: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.VEHICLES.DETAIL(workspaceId, vehicleId);
    return apiClient.get<Vehicle>(path);
  },
};
