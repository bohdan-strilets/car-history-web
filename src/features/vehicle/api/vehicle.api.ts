import type { Vehicle } from '@entities/vehicle';
import { apiClient, ENDPOINTS } from '@shared/api';

import type { CreateVehicleDto, UpdateVehicleDto } from '../model';

export const vehicleApi = {
  create: (workspaceId: string, dto: CreateVehicleDto) => {
    return apiClient.post<Vehicle>(ENDPOINTS.VEHICLES.CREATE(workspaceId), dto);
  },
  update: (id: string, dto: UpdateVehicleDto) => {
    return apiClient.patch<Vehicle>(ENDPOINTS.VEHICLES.UPDATE(id), dto);
  },
  delete: (id: string) => {
    return apiClient.delete<void>(ENDPOINTS.VEHICLES.DELETE(id));
  },
};
