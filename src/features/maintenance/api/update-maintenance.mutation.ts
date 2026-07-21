import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { maintenanceIntervalMutationApi } from './maintenance.api';

import type { MaintenanceIntervalActionParams, UpdateMaintenanceIntervalDto } from '../model';

export const useUpdateMaintenanceIntervalMutation = ({
  workspaceId,
  vehicleId,
  maintenanceId,
  onSuccess,
}: MaintenanceIntervalActionParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateMaintenanceIntervalDto) => {
      return maintenanceIntervalMutationApi.update(workspaceId, vehicleId, maintenanceId, dto);
    },

    onSuccess: () => {
      const maintenanceKeys = queryKeys.vehicles.maintenance(vehicleId);
      const vehiclesAllKeys = queryKeys.vehicles.all(workspaceId);

      queryClient.invalidateQueries({ queryKey: maintenanceKeys });
      queryClient.invalidateQueries({ queryKey: vehiclesAllKeys });
      onSuccess?.();
    },
  });
};
