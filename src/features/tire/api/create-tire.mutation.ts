import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { tireMutationApi } from './tire.api';

import type { CreateTireDto } from '../model';

export const useCreateTireMutation = (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateTireDto) => {
      return tireMutationApi.create(workspaceId, vehicleId, dto);
    },
    onSuccess: () => {
      const tiresKeys = queryKeys.vehicles.tires(vehicleId);
      const vehiclesAllKeys = queryKeys.vehicles.all(workspaceId);

      queryClient.invalidateQueries({ queryKey: tiresKeys });
      queryClient.invalidateQueries({ queryKey: vehiclesAllKeys });
    },
  });
};
