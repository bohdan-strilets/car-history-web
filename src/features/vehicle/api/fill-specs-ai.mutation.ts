import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { vehicleApi } from './vehicle.api';

import type { FillSpecsAiParams } from '../model';

export const useFillSpecsAiMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ workspaceId, vehicleId }: FillSpecsAiParams) => {
      return vehicleApi.fillSpecsAi(workspaceId, vehicleId);
    },
    onSuccess: (_, { workspaceId, vehicleId }) => {
      const vehicleDetailQueryKey = queryKeys.vehicles.detail(vehicleId);
      const vehiclesAllQueryKey = queryKeys.vehicles.all(workspaceId);

      queryClient.invalidateQueries({ queryKey: vehicleDetailQueryKey });
      queryClient.invalidateQueries({ queryKey: vehiclesAllQueryKey });
    },
  });
};
