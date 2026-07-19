import { useState } from 'react';

import { canDeleteTimelineEvent, EventDetail, useTimelineEvent } from '@entities/timeline';
import { useWorkspaceQuery } from '@entities/workspace';
import { useOpenDeleteEvent, useOpenEditTimelineEvent } from '@features/timeline';
import { useAdaptiveModal } from '@shared/lib/modal';
import { useAuth } from '@shared/store';
import { Spinner } from '@shared/ui';

import type { EventDetailModalProps } from './event-detail-modal.types';

export const EventDetailModal = ({ eventId, workspaceId, vehicleId }: EventDetailModalProps) => {
  const modal = useAdaptiveModal();
  const [isDeleted, setIsDeleted] = useState(false);

  const { user } = useAuth();
  const { data: workspaceData } = useWorkspaceQuery(workspaceId);
  const role = workspaceData?.data?.role ?? 'MEMBER';

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
  const canDelete = canDeleteTimelineEvent(role, event.createdBy, user?.id ?? '');

  return (
    <EventDetail
      event={event}
      onEdit={() => handleEdit(event)}
      onDelete={handleDelete}
      canDelete={canDelete}
    />
  );
};
