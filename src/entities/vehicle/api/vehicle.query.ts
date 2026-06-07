import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { vehicleApi } from './vehicle.api';

// Get all vehicles for a workspace

export const useVehiclesQuery = (workspaceId: string) => {
  return useQuery({
    queryKey: queryKeys.vehicles.all(workspaceId),
    queryFn: () => vehicleApi.getAll(workspaceId),
    enabled: !!workspaceId,
  });
};

// Get a single vehicle by ID

export const useVehicleQuery = (workspaceId: string, vehicleId: string) => {
  return useQuery({
    queryKey: queryKeys.vehicles.detail(vehicleId),
    queryFn: () => vehicleApi.getById(workspaceId, vehicleId),
    enabled: !!workspaceId && !!vehicleId,
  });
};
