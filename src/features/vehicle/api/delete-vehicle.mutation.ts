import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { vehicleApi } from './vehicle.api';

import type { DeleteVehicleParams } from '../model';

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
