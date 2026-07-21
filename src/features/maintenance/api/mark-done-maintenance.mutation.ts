import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { maintenanceIntervalMutationApi } from './maintenance.api';

import type { MaintenanceIntervalActionParams, MarkMaintenanceDoneDto } from '../model/types';

export const useMarkDoneMaintenanceIntervalMutation = ({
  workspaceId,
  vehicleId,
  maintenanceId,
  onSuccess,
}: MaintenanceIntervalActionParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: MarkMaintenanceDoneDto) => {
      return maintenanceIntervalMutationApi.markDone(workspaceId, vehicleId, maintenanceId, dto);
    },

    onSuccess: () => {
      const maintenanceKeys = queryKeys.vehicles.maintenance(vehicleId);
      const remindersKeys = queryKeys.vehicles.reminders(vehicleId);
      const timelineKeys = queryKeys.vehicles.timelineRoot(vehicleId);
      const vehicleKeys = queryKeys.vehicles.detail(vehicleId);
      const vehiclesAllKeys = queryKeys.vehicles.all(workspaceId);

      queryClient.invalidateQueries({ queryKey: maintenanceKeys });
      queryClient.invalidateQueries({ queryKey: remindersKeys });
      queryClient.invalidateQueries({ queryKey: timelineKeys, exact: false });
      queryClient.invalidateQueries({ queryKey: vehicleKeys });
      queryClient.invalidateQueries({ queryKey: vehiclesAllKeys });

      onSuccess?.();
    },
  });
};
