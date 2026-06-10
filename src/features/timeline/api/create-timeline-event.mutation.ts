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
      const keys = queryKeys.vehicles.timeline(vehicleId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
