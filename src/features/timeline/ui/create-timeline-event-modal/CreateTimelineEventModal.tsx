import { useState } from 'react';

import { type TimelineEventType } from '@entities/timeline';
import { EventTypeGrid } from '@features/timeline';

import { SelectedTypeForm } from './SelectedTypeForm';

import type { CreateTimelineEventModalProps } from './create-timeline-event-modal.types';

export const CreateTimelineEventModal = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
  onSuccess,
}: CreateTimelineEventModalProps) => {
  const [selectedType, setSelectedType] = useState<TimelineEventType | null>(null);

  if (!selectedType) {
    return <EventTypeGrid onSelect={setSelectedType} />;
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
