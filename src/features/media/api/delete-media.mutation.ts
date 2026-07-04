import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { MediaId } from '@entities/media';
import type { VehicleId } from '@entities/vehicle';
import { queryKeys } from '@shared/config';

import { mediaMutationApi } from './media.api';

export const useDeleteMediaMutation = (vehicleId: VehicleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mediaId: MediaId) => {
      return mediaMutationApi.delete(mediaId);
    },

    onSuccess: () => {
      const galleryKey = queryKeys.vehicles.gallery(vehicleId);
      queryClient.invalidateQueries({ queryKey: galleryKey });
    },
  });
};
