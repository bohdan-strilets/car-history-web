import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { FillSpecsAiParams } from '../model';

import { vehicleApi } from './vehicle.api';

export const useFillSpecsAiMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ workspaceId, vehicleId }: FillSpecsAiParams) => {
      return vehicleApi.fillSpecsAi(workspaceId, vehicleId);
    },

    onSuccess: (_, { vehicleId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.vehicles.detail(vehicleId) });
    },
  });
};
