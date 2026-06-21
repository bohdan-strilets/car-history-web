import type { EventId } from '@entities/timeline';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

export type EventDetailModalProps = {
  eventId: EventId;
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
};
