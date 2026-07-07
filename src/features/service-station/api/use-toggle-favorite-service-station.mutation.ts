import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { serviceStationMutationApi } from './service-station.api';

export const useToggleFavoriteServiceStationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return serviceStationMutationApi.toggleFavorite(id);
    },

    onSuccess: () => {
      const keys = queryKeys.serviceStations.all();
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
