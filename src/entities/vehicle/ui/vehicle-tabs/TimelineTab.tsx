import { useOpenCreateTimelineEvent } from '@features/timeline';

import type { TimelineTabProps } from './vehicle-tabs.types';

export const TimelineTab = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
}: TimelineTabProps) => {
  const { handleCreate } = useOpenCreateTimelineEvent({
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
