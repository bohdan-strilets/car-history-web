import { useTranslation } from 'react-i18next';

import type { EventId, TimelineEventType } from '@entities/timeline';
import { useAdaptiveModal } from '@shared/lib/modal';

import { EventDetailModal } from '../ui/event-detail-modal';

import type { OpenTimelineEventDetailParams } from './types';

export const useOpenTimelineEventDetail = ({
  workspaceId,
  vehicleId,
}: OpenTimelineEventDetailParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleOpen = (eventId: EventId, type: TimelineEventType) => {
    modal.open(
      <EventDetailModal eventId={eventId} workspaceId={workspaceId} vehicleId={vehicleId} />,
      { title: t(`enums.timelineType.${type}`) },
    );
  };

  return { handleOpen };
};
