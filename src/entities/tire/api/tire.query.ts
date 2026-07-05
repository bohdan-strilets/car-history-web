import { useQuery } from '@tanstack/react-query';

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { tireApi } from './tire.api';

export const useTiresQuery = (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
  useQuery({
    queryKey: queryKeys.vehicles.tires(vehicleId),
    queryFn: () => tireApi.getAll(workspaceId, vehicleId),
    enabled: !!workspaceId && !!vehicleId,
  });
