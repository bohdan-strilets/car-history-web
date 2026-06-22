import { useQuery } from '@tanstack/react-query';

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { maintenanceIntervalApi } from './maintenance-interval.api';

export const useMaintenanceIntervalsQuery = (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
  useQuery({
    queryKey: queryKeys.vehicles.maintenance(vehicleId),
    queryFn: () => maintenanceIntervalApi.getAll(workspaceId, vehicleId),
    enabled: !!workspaceId && !!vehicleId,
  });
