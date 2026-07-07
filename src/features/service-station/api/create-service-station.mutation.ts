import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { serviceStationMutationApi } from './service-station.api';

import type { CreateServiceStationValues } from '../model';

export const useCreateServiceStationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateServiceStationValues) => serviceStationMutationApi.create(dto),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.serviceStations.all() });
    },
  });
};
