import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { maintenanceIntervalMutationApi } from './maintenance-interval.api';

import type { MaintenanceIntervalActionParams } from '../model';

export const useDisableMaintenanceIntervalMutation = ({
  workspaceId,
  vehicleId,
  maintenanceId,
  onSuccess,
}: MaintenanceIntervalActionParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return maintenanceIntervalMutationApi.disable(workspaceId, vehicleId, maintenanceId);
    },

    onSuccess: () => {
      const maintenanceKeys = queryKeys.vehicles.maintenance(vehicleId);
      queryClient.invalidateQueries({ queryKey: maintenanceKeys });
      onSuccess?.();
    },
  });
};
