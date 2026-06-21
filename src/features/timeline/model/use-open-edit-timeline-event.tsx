import { useTranslation } from 'react-i18next';

import type { TimelineEvent } from '@entities/timeline';
import { useAdaptiveModal } from '@shared/lib/modal';

import { EditTimelineEventForm } from '../ui';

import type { OpenEditTimelineEventParams } from './types';

export const useOpenEditTimelineEvent = ({
  workspaceId,
  vehicleId,
}: OpenEditTimelineEventParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleEdit = (event: TimelineEvent) => {
    modal.open(
      <EditTimelineEventForm
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        eventId={event.id}
        defaultValues={{
          title: event.title,
          eventDate: event.eventDate,
          mileage: event.mileage,
          cost: event.cost ? Number(event.cost) : undefined,
          description: event.description ?? '',
        }}
        onSuccess={() => modal.closeLast()}
      />,
      { title: t('timeline.actions.editEvent') },
    );
  };

  return { handleEdit };
};
