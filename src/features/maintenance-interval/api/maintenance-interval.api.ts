import type { MaintenanceId } from '@entities/maintenance-interval';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { CreateMaintenanceIntervalDto, UpdateMaintenanceIntervalDto } from '../model';

export const maintenanceIntervalMutationApi = {
  create: (workspaceId: WorkspaceId, vehicleId: VehicleId, dto: CreateMaintenanceIntervalDto) => {
    const path = ENDPOINTS.MAINTENANCE.CREATE(workspaceId, vehicleId);
    return apiClient.post(path, dto);
  },

  update: (
    workspaceId: WorkspaceId,
    vehicleId: VehicleId,
    maintenanceId: MaintenanceId,
    dto: UpdateMaintenanceIntervalDto,
  ) => {
    const path = ENDPOINTS.MAINTENANCE.UPDATE(workspaceId, vehicleId, maintenanceId);
    return apiClient.patch(path, dto);
  },

  disable: (workspaceId: WorkspaceId, vehicleId: VehicleId, maintenanceId: MaintenanceId) => {
    const path = ENDPOINTS.MAINTENANCE.DISABLE(workspaceId, vehicleId, maintenanceId);
    return apiClient.patch(path);
  },

  enable: (workspaceId: WorkspaceId, vehicleId: VehicleId, maintenanceId: MaintenanceId) => {
    const path = ENDPOINTS.MAINTENANCE.ENABLE(workspaceId, vehicleId, maintenanceId);
    return apiClient.patch(path);
  },

  markDone: (
    workspaceId: WorkspaceId,
    vehicleId: VehicleId,
    maintenanceId: MaintenanceId,
    currentMileage: number,
  ) => {
    const path = ENDPOINTS.MAINTENANCE.MARK_DONE(workspaceId, vehicleId, maintenanceId);
    return apiClient.patch(path, {
      currentMileage,
    });
  },

  delete: (workspaceId: WorkspaceId, vehicleId: VehicleId, maintenanceId: MaintenanceId) => {
    const path = ENDPOINTS.MAINTENANCE.DELETE(workspaceId, vehicleId, maintenanceId);
    return apiClient.delete(path);
  },
};
