import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { maintenanceIntervalMutationApi } from './maintenance-interval.api';

import type { MaintenanceIntervalActionParams } from '../model/types';

export const useMarkDoneMaintenanceIntervalMutation = ({
  workspaceId,
  vehicleId,
  maintenanceId,
  onSuccess,
}: MaintenanceIntervalActionParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (currentMileage: number) => {
      return maintenanceIntervalMutationApi.markDone(
        workspaceId,
        vehicleId,
        maintenanceId,
        currentMileage,
      );
    },

    onSuccess: () => {
      const maintenanceKeys = queryKeys.vehicles.maintenance(vehicleId);
      const remindersKeys = queryKeys.vehicles.reminders(vehicleId);

      queryClient.invalidateQueries({ queryKey: maintenanceKeys });
      queryClient.invalidateQueries({ queryKey: remindersKeys });

      onSuccess?.();
    },
  });
};
