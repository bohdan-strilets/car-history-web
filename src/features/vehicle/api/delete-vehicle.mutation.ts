import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { DeleteVehicleParams } from '../model';

import { vehicleApi } from './vehicle.api';

export const useDeleteVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ vehicleId, workspaceId }: DeleteVehicleParams) => {
      return vehicleApi.delete(workspaceId, vehicleId);
    },

    onSuccess: (_, { workspaceId }) => {
      const keys = queryKeys.vehicles.all(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
