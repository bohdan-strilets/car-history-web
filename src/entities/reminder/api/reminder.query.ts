import { useQuery } from '@tanstack/react-query';

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';

import { reminderApi } from './reminder.api';

export const useRemindersQuery = (workspaceId: WorkspaceId, vehicleId: VehicleId) =>
  useQuery({
    queryKey: queryKeys.vehicles.reminders(vehicleId),
    queryFn: () => reminderApi.getAll(workspaceId, vehicleId),
    enabled: !!workspaceId && !!vehicleId,
  });
