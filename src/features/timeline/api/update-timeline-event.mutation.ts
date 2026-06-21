import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { timelineApi } from './timeline.api';

import type { EventParams, UpdateTimelineEventDto } from '../model';

export const useUpdateTimelineEventMutation = ({
  workspaceId,
  vehicleId,
  eventId,
}: EventParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateTimelineEventDto) => {
      return timelineApi.update({ workspaceId, vehicleId, eventId, dto });
    },

    onSuccess: () => {
      const timelineKeys = queryKeys.vehicles.timelineRoot(vehicleId);
      const vehicleDetailKeys = queryKeys.vehicles.detail(vehicleId);
      const vehicleMilestonesKeys = queryKeys.vehicles.milestones(vehicleId);

      queryClient.invalidateQueries({ queryKey: timelineKeys });
      queryClient.invalidateQueries({ queryKey: vehicleDetailKeys });
      queryClient.invalidateQueries({ queryKey: vehicleMilestonesKeys });
    },
  });
};
