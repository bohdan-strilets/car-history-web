import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { vehicleApi } from './vehicle.api';

export const useDeleteVehicleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: string; workspaceId: string }) => {
      return vehicleApi.delete(id);
    },

    onSuccess: (_, { workspaceId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.vehicles.all(workspaceId) });
    },
  });
};
