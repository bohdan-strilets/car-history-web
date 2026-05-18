import { queryKeys } from '@shared/config';
import { useQuery } from '@tanstack/react-query';

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

export const useVehicleQuery = (id: string) => {
  return useQuery({
    queryKey: queryKeys.vehicles.detail(id),
    queryFn: () => vehicleApi.getById(id),
    enabled: !!id,
  });
};
