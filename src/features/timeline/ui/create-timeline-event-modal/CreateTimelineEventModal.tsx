import { useMemo, useState } from 'react';

import { TIMELINE_EVENT_TYPE, useTimeline, type TimelineEventType } from '@entities/timeline';
import { EventTypeGrid } from '@features/timeline';

import { SelectedTypeForm } from './SelectedTypeForm';

import type { CreateTimelineEventModalProps } from './create-timeline-event-modal.types';

export const CreateTimelineEventModal = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
  vehicleFuelType,
  onSuccess,
}: CreateTimelineEventModalProps) => {
  const [selectedType, setSelectedType] = useState<TimelineEventType | null>(null);

  const { data } = useTimeline({ workspaceId, vehicleId });

  const disabledTypes = useMemo<TimelineEventType[]>(() => {
    const timeline = data?.data ?? [];
    const types = timeline.map((e) => e.type);
    const alwaysUnique = [TIMELINE_EVENT_TYPE.PURCHASE, TIMELINE_EVENT_TYPE.SALE];

    const disabled: TimelineEventType[] = alwaysUnique.filter((t) => types.includes(t));

    const isElectric = vehicleFuelType?.includes('ELECTRIC');
    const isHybrid = vehicleFuelType?.includes('HYBRID');
    const isChargeable = isElectric || isHybrid;

    if (!isChargeable) {
      disabled.push(TIMELINE_EVENT_TYPE.CHARGE);
    }

    return disabled;
  }, [data?.data, vehicleFuelType]);

  if (!selectedType) {
    return <EventTypeGrid onSelect={setSelectedType} disabledTypes={disabledTypes} />;
  }

  return (
    <SelectedTypeForm
      workspaceId={workspaceId}
      vehicleId={vehicleId}
      type={selectedType}
      currentMileage={currentMileage}
      fuelType={fuelType}
      onSuccess={onSuccess}
    />
  );
};
