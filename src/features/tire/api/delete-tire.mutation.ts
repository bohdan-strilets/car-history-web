import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { TireId } from '@entities/tire';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { tireMutationApi } from './tire.api';

export const useDeleteTireMutation = (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tireId: TireId) => {
      return tireMutationApi.delete(tireId);
    },
    onSuccess: () => {
      const tiresKeys = queryKeys.vehicles.tires(vehicleId);
      const vehiclesAllKeys = queryKeys.vehicles.all(workspaceId);

      queryClient.invalidateQueries({ queryKey: tiresKeys });
      queryClient.invalidateQueries({ queryKey: vehiclesAllKeys });
    },
  });
};
