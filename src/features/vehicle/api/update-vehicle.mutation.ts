import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { UpdateVehicleParams } from '../model';

import { vehicleApi } from './vehicle.api';

export const useUpdateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }: UpdateVehicleParams) => {
      return vehicleApi.update(id, dto);
    },

    onSuccess: (_, { id, workspaceId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.vehicles.detail(id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.vehicles.all(workspaceId) });
    },
  });
};
