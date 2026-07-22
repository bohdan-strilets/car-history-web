import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { MilestoneLevel, VehicleMilestone } from '../model';

export const milestoneApi = {
  getMany: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.VEHICLES.MILESTONES(workspaceId, vehicleId);
    return apiClient.get<VehicleMilestone[]>(path);
  },
  getLevels: (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
    const path = ENDPOINTS.VEHICLES.MILESTONE_LEVELS(workspaceId, vehicleId);
    return apiClient.get<MilestoneLevel[]>(path);
  },
};
