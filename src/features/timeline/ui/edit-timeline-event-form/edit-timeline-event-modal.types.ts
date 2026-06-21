import type { EventId } from '@entities/timeline';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

import type { UpdateTimelineEventValues } from '../../model/schemes';

export type EditTimelineEventModalProps = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  eventId: EventId;
  defaultValues: Partial<UpdateTimelineEventValues>;
  onSuccess: () => void;
};
