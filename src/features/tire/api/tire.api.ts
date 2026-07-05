import type { TireId } from '@entities/tire';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { CreateTireDto, UpdateTireDto } from '../model';

export const tireMutationApi = {
  create: (workspaceId: WorkspaceId, vehicleId: VehicleId, dto: CreateTireDto) => {
    const path = ENDPOINTS.TIRES.CREATE(workspaceId, vehicleId);
    return apiClient.post(path, dto);
  },

  update: (tireId: TireId, dto: UpdateTireDto) => {
    const path = ENDPOINTS.TIRES.UPDATE(tireId);
    return apiClient.patch(path, dto);
  },

  delete: (tireId: TireId) => {
    const path = ENDPOINTS.TIRES.DELETE(tireId);
    return apiClient.delete(path);
  },
};
