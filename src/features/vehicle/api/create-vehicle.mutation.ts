import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { vehicleApi } from './vehicle.api';

import type { CreateVehicleParams } from '../model';

export const useCreateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ workspaceId, dto }: CreateVehicleParams) => {
      return vehicleApi.create(workspaceId, dto);
    },

    onSuccess: (_, { workspaceId }) => {
      const keys = queryKeys.vehicles.all(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
