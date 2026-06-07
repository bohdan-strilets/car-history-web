import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { UpdateVehicleSpecsParams } from '../model';

import { vehicleApi } from './vehicle.api';

export const useUpdateVehicleSpecsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ vehicleId, workspaceId, dto }: UpdateVehicleSpecsParams) => {
      return vehicleApi.updateSpecs(workspaceId, vehicleId, dto);
    },

    onSuccess: (_, { vehicleId }) => {
      const keys = queryKeys.vehicles.detail(vehicleId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
