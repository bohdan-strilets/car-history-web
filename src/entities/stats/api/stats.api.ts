import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { GetVehicleStatsParams, VehicleStats } from '../model';

export const statsApi = {
  getOne: ({ workspaceId, vehicleId, period, date }: GetVehicleStatsParams) => {
    const path = ENDPOINTS.VEHICLES.STATS(workspaceId, vehicleId);
    const params = { period, date };

    return apiClient.get<VehicleStats>(path, { params });
  },
};
