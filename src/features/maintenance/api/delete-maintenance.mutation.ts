import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { maintenanceIntervalMutationApi } from './maintenance.api';

import type { MaintenanceIntervalActionParams } from '../model';

export const useDeleteMaintenanceIntervalMutation = ({
  workspaceId,
  vehicleId,
  maintenanceId,
  onSuccess,
}: MaintenanceIntervalActionParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return maintenanceIntervalMutationApi.delete(workspaceId, vehicleId, maintenanceId);
    },

    onSuccess: () => {
      const maintenanceKeys = queryKeys.vehicles.maintenance(vehicleId);
      const remindersKeys = queryKeys.vehicles.reminders(vehicleId);
      const vehiclesAllKeys = queryKeys.vehicles.all(workspaceId);

      queryClient.invalidateQueries({ queryKey: maintenanceKeys });
      queryClient.invalidateQueries({ queryKey: remindersKeys });
      queryClient.invalidateQueries({ queryKey: vehiclesAllKeys });

      onSuccess?.();
    },
  });
};
