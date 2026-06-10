import { useCreateTimelineEvent } from '@features/timeline/model/use-create-timeline-event';

import type { TimelineTabProps } from './vehicle-tabs.types';

export const TimelineTab = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
}: TimelineTabProps) => {
  const { handleCreate } = useCreateTimelineEvent({
    workspaceId,
    vehicleId,
    currentMileage,
    fuelType,
  });

  return (
    <div>
      <button type="button" onClick={handleCreate}>
        Add event
      </button>
    </div>
  );
};
