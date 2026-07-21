import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { maintenanceIntervalMutationApi } from './maintenance.api';

import type { CreateMaintenanceIntervalDto, MaintenanceIntervalParams } from '../model';

export const useCreateMaintenanceIntervalMutation = ({
  workspaceId,
  vehicleId,
}: MaintenanceIntervalParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateMaintenanceIntervalDto) => {
      return maintenanceIntervalMutationApi.create(workspaceId, vehicleId, dto);
    },

    onSuccess: () => {
      const maintenanceKeys = queryKeys.vehicles.maintenance(vehicleId);
      const vehiclesAllKeys = queryKeys.vehicles.all(workspaceId);

      queryClient.invalidateQueries({ queryKey: maintenanceKeys });
      queryClient.invalidateQueries({ queryKey: vehiclesAllKeys });
    },
  });
};
