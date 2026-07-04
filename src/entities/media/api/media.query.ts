import { useQuery } from '@tanstack/react-query';

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { mediaApi } from './media.api';

import type { MediaCategory } from '../model';

export const useGalleryQuery = (
  workspaceId: WorkspaceId,
  vehicleId: VehicleId,
  category?: MediaCategory,
) =>
  useQuery({
    queryKey: queryKeys.vehicles.gallery(vehicleId, category),
    queryFn: () => mediaApi.getGallery(workspaceId, vehicleId, category),
    enabled: !!workspaceId && !!vehicleId,
  });
