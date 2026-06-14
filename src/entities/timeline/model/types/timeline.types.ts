import type { VehicleMilestone } from '@entities/milestone';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

import type { TimelineEventType } from '../timeline.constants';
import type { ServiceStationRef, TimelineEventDetails } from './timeline-events.types';

// Timeline event types

export type EventId = string;
export type TimelineListItem = TimelineListEvent | TimelineListMilestone;
export type TimelineListEvent = TimelineEvent & {
  itemType: 'event';
};
export type TimelineListMilestone = VehicleMilestone & {
  itemType: 'milestone';
};

// Timeline event

export type TimelineEvent = {
  id: EventId;
  vehicleId: VehicleId;
  type: TimelineEventType;
  title: string;
  eventDate: string;
  mileage: number;
  cost: string | null;
  description: string | null;
  serviceStation: ServiceStationRef | null;
  details: TimelineEventDetails | null;
  createdAt: string;
  updatedAt: string;
};

export type TimelineQuery = {
  page?: number;
  limit?: number;
  type?: TimelineEventType[];
  dateFrom?: string;
  dateTo?: string;
};

// Params

export type GetManyParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  query?: TimelineQuery;
};

export type GetOneParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  eventId: EventId;
};

export type TimelineEventParams = GetOneParams & {
  enabled?: boolean;
};
