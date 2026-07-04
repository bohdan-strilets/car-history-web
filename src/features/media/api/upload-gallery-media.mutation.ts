import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { mediaMutationApi } from './media.api';

import type { UploadGalleryParams } from '../model';

export const useUploadGalleryMediaMutation = (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, category, isPrimary, onProgress }: UploadGalleryParams) => {
      return mediaMutationApi.upload(
        {
          file,
          entityType: 'VEHICLE',
          entityId: vehicleId,
          category,
          isPrimary,
        },
        onProgress,
      );
    },

    onSuccess: () => {
      const galleryKey = queryKeys.vehicles.gallery(vehicleId);
      queryClient.invalidateQueries({ queryKey: galleryKey });

      if (workspaceId) {
        const vehiclesKey = queryKeys.vehicles.detail(vehicleId);
        queryClient.invalidateQueries({ queryKey: vehiclesKey });
      }
    },
  });
};
