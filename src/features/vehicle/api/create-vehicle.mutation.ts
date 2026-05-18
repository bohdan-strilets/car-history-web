import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { CreateVehicleParams } from '../model';

import { vehicleApi } from './vehicle.api';

export const useCreateVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ workspaceId, dto }: CreateVehicleParams) => {
      return vehicleApi.create(workspaceId, dto);
    },
    onSuccess: (_, { workspaceId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.vehicles.all(workspaceId) });
    },
  });
};
