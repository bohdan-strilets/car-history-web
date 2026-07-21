import type { TimelineEventType } from '@entities/timeline';
import type { FuelType, RefuelType } from '@entities/vehicle';

export type CreateTimelineEventModalProps = {
  workspaceId: string;
  vehicleId: string;
  currentMileage: number;
  fuelType?: RefuelType;
  vehicleFuelType?: FuelType[];
  initialType?: TimelineEventType;
  onSuccess: () => void;
};

export type SelectedTypeFormProps = CreateTimelineEventModalProps & {
  type: TimelineEventType;
};
