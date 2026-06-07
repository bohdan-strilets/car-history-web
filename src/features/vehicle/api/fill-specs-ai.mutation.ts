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

    onSuccess: (_, { vehicleId }) => {
      const keys = queryKeys.vehicles.detail(vehicleId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
