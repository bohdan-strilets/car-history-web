import type { Vehicle, VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { CreateVehicleDto, UpdateVehicleDto, VehicleSpecsValues } from '../model';

export const vehicleApi = {
  create: (workspaceId: WorkspaceId, dto: CreateVehicleDto) => {
    const path = ENDPOINTS.VEHICLES.CREATE(workspaceId);
    return apiClient.post<Vehicle>(path, dto);
  },

  update: (workspaceId: WorkspaceId, vehicleId: VehicleId, dto: UpdateVehicleDto) => {
    const path = ENDPOINTS.VEHICLES.UPDATE(workspaceId, vehicleId);
    return apiClient.patch<Vehicle>(path, dto);
  },

  updateSpecs: (workspaceId: WorkspaceId, vehicleId: VehicleId, dto: VehicleSpecsValues) => {
    const path = ENDPOINTS.VEHICLES.UPDATE_SPECS(workspaceId, vehicleId);
    return apiClient.patch<Vehicle>(path, dto);
  },

  delete: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.VEHICLES.DELETE(workspaceId, vehicleId);
    return apiClient.delete<void>(path);
  },

  fillSpecsAi: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.VEHICLES.FILL_SPECS_AI(workspaceId, vehicleId);
    return apiClient.post<Vehicle>(path);
  },
};
