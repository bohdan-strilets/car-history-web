import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { timelineApi } from './timeline.api';

import type { GetManyParams, TimelineEventParams } from '../model';

// Get timeline events list for a vehicle

export const useTimeline = ({ workspaceId, vehicleId, query }: GetManyParams) => {
  return useQuery({
    queryKey: queryKeys.vehicles.timeline(vehicleId, query),
    queryFn: () => timelineApi.getMany({ workspaceId, vehicleId, query }),
    placeholderData: keepPreviousData,
  });
};

// Get timeline event details for a vehicle

export const useTimelineEvent = ({
  workspaceId,
  vehicleId,
  eventId,
  enabled = true,
}: TimelineEventParams) => {
  return useQuery({
    queryKey: queryKeys.vehicles.timelineEvent(vehicleId, eventId),
    queryFn: () => timelineApi.getOne({ workspaceId, vehicleId, eventId }),
    enabled,
  });
};
