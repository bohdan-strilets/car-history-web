import type { Vehicle } from '@entities/vehicle';
import { apiClient, ENDPOINTS } from '@shared/api';

import type { CreateVehicleDto } from '../model';

export const vehicleApi = {
  create: (workspaceId: string, dto: CreateVehicleDto) => {
    return apiClient.post<Vehicle>(ENDPOINTS.VEHICLES.CREATE(workspaceId), dto);
  },
};
