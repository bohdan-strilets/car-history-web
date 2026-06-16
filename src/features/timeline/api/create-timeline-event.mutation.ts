import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { timelineApi } from './timeline.api';

import type { CreateTimelineEventDto, TimelineEventParams } from '../model';

export const useCreateTimelineEventMutation = ({ workspaceId, vehicleId }: TimelineEventParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateTimelineEventDto) => {
      return timelineApi.create({ workspaceId, vehicleId, dto });
    },

    onSuccess: () => {
      const timelineKeys = queryKeys.vehicles.timelineRoot(vehicleId);
      const milestonesKeys = queryKeys.vehicles.milestones(vehicleId);

      queryClient.invalidateQueries({ queryKey: timelineKeys });
      queryClient.invalidateQueries({ queryKey: milestonesKeys });
    },
  });
};
