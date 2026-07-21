import { useTranslation } from 'react-i18next';

import type { TimelineEventType } from '@entities/timeline';
import { useAdaptiveModal } from '@shared/lib/modal';

import { CreateTimelineEventModal } from '../ui';

import type { OpenCreateTimelineEventParams } from './types';

export const useOpenCreateTimelineEvent = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
  vehicleFuelType,
}: OpenCreateTimelineEventParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleCreate = (initialType?: TimelineEventType) => {
    modal.open(
      <CreateTimelineEventModal
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        currentMileage={currentMileage}
        fuelType={fuelType}
        vehicleFuelType={vehicleFuelType}
        initialType={initialType}
        onSuccess={() => modal.closeLast()}
      />,
      { title: t('timeline.actions.addEvent') },
    );
  };

  return { handleCreate };
};
