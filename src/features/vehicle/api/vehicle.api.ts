import type { Vehicle } from '@entities/vehicle';
import { apiClient, ENDPOINTS } from '@shared/api';

import type { CreateVehicleDto, UpdateVehicleDto } from '../model';

export const vehicleApi = {
  create: (workspaceId: string, dto: CreateVehicleDto) => {
    return apiClient.post<Vehicle>(ENDPOINTS.VEHICLES.CREATE(workspaceId), dto);
  },
  update: (workspaceId: string, id: string, dto: UpdateVehicleDto) => {
    return apiClient.patch<Vehicle>(ENDPOINTS.VEHICLES.UPDATE(workspaceId, id), dto);
  },
  delete: (workspaceId: string, id: string) => {
    return apiClient.delete<void>(ENDPOINTS.VEHICLES.DELETE(workspaceId, id));
  },
  fillSpecsAi: (workspaceId: string, vehicleId: string) => {
    return apiClient.post<Vehicle>(ENDPOINTS.VEHICLES.FILL_SPECS_AI(workspaceId, vehicleId), {});
  },
};
