import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { serviceStationMutationApi } from './service-station.api';

import type { CreateServiceStationValues } from '../model';

export const useUpdateServiceStationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: Partial<CreateServiceStationValues> }) => {
      return serviceStationMutationApi.update(id, dto);
    },

    onSuccess: (_, variables) => {
      const serviceStationDetailKey = queryKeys.serviceStations.detail(variables.id);
      const serviceStationListKey = queryKeys.serviceStations.all();

      queryClient.invalidateQueries({ queryKey: serviceStationListKey });
      queryClient.invalidateQueries({ queryKey: serviceStationDetailKey });
    },
  });
};
