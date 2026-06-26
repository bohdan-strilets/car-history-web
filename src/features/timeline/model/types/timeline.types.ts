import type { Control, UseFormSetValue } from 'react-hook-form';

import type { EventId, TimelineEventType } from '@entities/timeline';
import type { FuelType, RefuelType, VehicleId } from '@entities/vehicle';
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

export type DeleteTimelineEventParams = EventParams & {
  onSuccess?: () => void;
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

export type TimelineEventEditFormParams = EventParams & {
  onSuccess: () => void;
  defaultValues: Partial<TimelineEventValues>;
};

export type TimelineEventFormContext = {
  type: TimelineEventType;
} & VehicleContext;

export type OpenCreateTimelineEventParams = TimelineEventParams &
  VehicleContext & {
    vehicleFuelType?: FuelType[];
  };

export type OpenTimelineEventDetailParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
};

export type OpenEditTimelineEventParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
};

export type OpenDeleteEventParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  eventId: EventId;
  onSuccess?: () => void;
};

// Props

export type TimelineEventFormProps = {
  control: Control<TimelineEventValues>;
  setValue: UseFormSetValue<TimelineEventValues>;
  handleSubmit: () => void;
  isPending: boolean;
  errorMessage?: string;
  submitLabel: string;
};
