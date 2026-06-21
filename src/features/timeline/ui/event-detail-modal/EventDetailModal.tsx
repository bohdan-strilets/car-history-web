import { useState } from 'react';

import { EventDetail, useTimelineEvent } from '@entities/timeline';
import { useOpenDeleteEvent, useOpenEditTimelineEvent } from '@features/timeline';
import { useAdaptiveModal } from '@shared/lib/modal';
import { Spinner } from '@shared/ui';

import type { EventDetailModalProps } from './event-detail-modal.types';

export const EventDetailModal = ({ eventId, workspaceId, vehicleId }: EventDetailModalProps) => {
  const modal = useAdaptiveModal();
  const [isDeleted, setIsDeleted] = useState(false);

  const { handleEdit } = useOpenEditTimelineEvent({ workspaceId, vehicleId });
  const { handleDelete } = useOpenDeleteEvent({
    workspaceId,
    vehicleId,
    eventId,
    onSuccess: () => {
      setIsDeleted(true);
      modal.closeAll();
    },
  });

  const { data, isPending } = useTimelineEvent({
    workspaceId,
    vehicleId,
    eventId,
    enabled: !isDeleted,
  });

  if (isDeleted || isPending || !data?.data) return <Spinner />;

  const event = data.data;

  return <EventDetail event={event} onEdit={() => handleEdit(event)} onDelete={handleDelete} />;
};
