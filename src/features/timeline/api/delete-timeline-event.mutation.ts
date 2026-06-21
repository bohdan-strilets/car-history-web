import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { timelineApi } from './timeline.api';

import type { DeleteTimelineEventParams } from '../model';

export const useDeleteTimelineEventMutation = ({
  workspaceId,
  vehicleId,
  eventId,
  onSuccess,
}: DeleteTimelineEventParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return timelineApi.delete({ workspaceId, vehicleId, eventId });
    },

    onSuccess: () => {
      const timelineKeys = queryKeys.vehicles.timelineRoot(vehicleId);
      const eventKeys = queryKeys.vehicles.timelineEvent(vehicleId, eventId);
      const vehicleDetailKeys = queryKeys.vehicles.detail(vehicleId);
      const vehicleMilestonesKeys = queryKeys.vehicles.milestones(vehicleId);

      queryClient.removeQueries({ queryKey: eventKeys });
      queryClient.invalidateQueries({ queryKey: timelineKeys, exact: false });
      queryClient.invalidateQueries({ queryKey: vehicleDetailKeys });
      queryClient.invalidateQueries({ queryKey: vehicleMilestonesKeys });

      onSuccess?.();
    },
  });
};
