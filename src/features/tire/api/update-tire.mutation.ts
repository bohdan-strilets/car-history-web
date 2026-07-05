import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { TireId } from '@entities/tire';
import type { VehicleId } from '@entities/vehicle';
import { queryKeys } from '@shared/config';

import { tireMutationApi } from './tire.api';

import type { UpdateTireDto } from '../model';

export const useUpdateTireMutation = (vehicleId: VehicleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ tireId, dto }: { tireId: TireId; dto: UpdateTireDto }) => {
      return tireMutationApi.update(tireId, dto);
    },

    onSuccess: () => {
      const tiresKeys = queryKeys.vehicles.tires(vehicleId);
      queryClient.invalidateQueries({ queryKey: tiresKeys });
    },
  });
};
