import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { MediaId } from '@entities/media';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { mediaMutationApi } from './media.api';

export const useSetPrimaryMediaMutation = (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mediaId: MediaId) => {
      return mediaMutationApi.setPrimary(mediaId);
    },
    onSuccess: () => {
      const galleryKeys = queryKeys.vehicles.gallery(vehicleId);
      const detailKeys = queryKeys.vehicles.detail(vehicleId);
      const allKeys = queryKeys.vehicles.all(workspaceId);
      queryClient.invalidateQueries({ queryKey: galleryKeys });
      queryClient.invalidateQueries({ queryKey: detailKeys });
      queryClient.invalidateQueries({ queryKey: allKeys });
    },
  });
};
