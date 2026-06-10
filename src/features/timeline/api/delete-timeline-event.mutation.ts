import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { timelineApi } from './timeline.api';

import type { EventParams } from '../model';

export const useDeleteTimelineEventMutation = ({
  workspaceId,
  vehicleId,
  eventId,
}: EventParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return timelineApi.delete({ workspaceId, vehicleId, eventId });
    },

    onSuccess: () => {
      const keys = queryKeys.vehicles.timeline(vehicleId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
