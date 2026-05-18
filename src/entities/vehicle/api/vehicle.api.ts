import type { Vehicle } from '@entities/vehicle';
import { apiClient, ENDPOINTS } from '@shared/api';

export const vehicleApi = {
  getAll: (workspaceId: string) => {
    return apiClient.get<Vehicle[]>(ENDPOINTS.VEHICLES.LIST(workspaceId));
  },
  getById: (id: string) => {
    return apiClient.get<Vehicle>(ENDPOINTS.VEHICLES.DETAIL(id));
  },
};
