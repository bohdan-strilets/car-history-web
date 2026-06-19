import { useTranslation } from 'react-i18next';

import { EventDetail, type TimelineEvent } from '@entities/timeline';
import { useAdaptiveModal } from '@shared/lib/modal';

export const useOpenTimelineEventDetail = () => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleOpen = (event: TimelineEvent) => {
    modal.open(<EventDetail event={event} />, {
      title: t(`enums.timelineType.${event.type}`),
    });
  };

  return { handleOpen };
};
