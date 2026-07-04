import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { Media, MediaCategory } from '../model';

export const mediaApi = {
  getGallery: (workspaceId: WorkspaceId, vehicleId: VehicleId, category?: MediaCategory) => {
    const path = ENDPOINTS.VEHICLES.GALLERY(workspaceId, vehicleId);
    const params = category ? { category } : undefined;

    return apiClient.get<Media[]>(path, { params });
  },
};
