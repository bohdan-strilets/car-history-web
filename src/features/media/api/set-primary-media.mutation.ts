import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { MediaId } from '@entities/media';
import type { VehicleId } from '@entities/vehicle';
import { queryKeys } from '@shared/config';

import { mediaMutationApi } from './media.api';

export const useSetPrimaryMediaMutation = (vehicleId: VehicleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mediaId: MediaId) => {
      return mediaMutationApi.setPrimary(mediaId);
    },

    onSuccess: () => {
      const galleryKeys = queryKeys.vehicles.gallery(vehicleId);
      const detailKeys = queryKeys.vehicles.detail(vehicleId);

      queryClient.invalidateQueries({ queryKey: galleryKeys });
      queryClient.invalidateQueries({ queryKey: detailKeys });
    },
  });
};
