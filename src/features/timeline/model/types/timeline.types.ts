import type { Control } from 'react-hook-form';

import type { EventId, TimelineEventType } from '@entities/timeline';
import type { RefuelType, VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

import type { TimelineEventValues } from '../schemes';
import type { CreateTimelineEventDto, UpdateTimelineEventDto } from './timeline.dto';

// Params

export type TimelineEventParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
};

export type EventParams = TimelineEventParams & {
  eventId: EventId;
};

export type UpdateTimelineEventParams = EventParams & {
  dto: UpdateTimelineEventDto;
};

export type CreateTimelineEventParams = TimelineEventParams & {
  dto: CreateTimelineEventDto;
};

type VehicleContext = {
  currentMileage: number;
  fuelType?: RefuelType;
};

export type TimelineEventFormParams = TimelineEventParams & {
  type: TimelineEventType;
  onSuccess: () => void;
} & VehicleContext;

export type TimelineEventEditFormParams = TimelineEventFormParams & {
  eventId: EventId;
  defaultValues: Partial<TimelineEventValues>;
};

export type TimelineEventFormContext = {
  type: TimelineEventType;
} & VehicleContext;

export type OpenCreateTimelineEventParams = TimelineEventParams & VehicleContext;

// Props

export type TimelineEventFormProps = {
  control: Control<TimelineEventValues>;
  handleSubmit: () => void;
  isPending: boolean;
  errorMessage?: string;
  submitLabel: string;
};
