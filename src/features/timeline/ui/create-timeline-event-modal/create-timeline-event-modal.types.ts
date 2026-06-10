import type { TimelineEventType } from '@entities/timeline';
import type { RefuelType } from '@entities/vehicle';

export type CreateTimelineEventModalProps = {
  workspaceId: string;
  vehicleId: string;
  currentMileage: number;
  fuelType?: RefuelType;
  onSuccess: () => void;
};

export type SelectedTypeFormProps = CreateTimelineEventModalProps & {
  type: TimelineEventType;
};
