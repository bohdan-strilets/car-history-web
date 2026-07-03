import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { statsApi } from './stats.api';

import type { GetVehicleStatsParams } from '../model';

export const useVehicleStats = ({
  workspaceId,
  vehicleId,
  period,
  date,
}: GetVehicleStatsParams) => {
  return useQuery({
    queryKey: queryKeys.vehicles.stats(vehicleId, period, date),
    queryFn: () => statsApi.getOne({ workspaceId, vehicleId, period, date }),
    enabled: Boolean(workspaceId) && Boolean(vehicleId),
  });
};
