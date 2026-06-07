import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { vehicleApi } from './vehicle.api';

import type { UpdateVehicleParams } from '../model';

export const useUpdateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ vehicleId, workspaceId, dto }: UpdateVehicleParams) => {
      return vehicleApi.update(workspaceId, vehicleId, dto);
    },

    onSuccess: (_, { workspaceId }) => {
      const keys = queryKeys.vehicles.all(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
