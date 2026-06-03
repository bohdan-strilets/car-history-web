import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { DeleteVehicleParams } from '../model';

import { vehicleApi } from './vehicle.api';

export const useDeleteVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, workspaceId }: DeleteVehicleParams) => {
      return vehicleApi.delete(workspaceId, id);
    },

    onSuccess: (_, { workspaceId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.vehicles.all(workspaceId) });
    },
  });
};
