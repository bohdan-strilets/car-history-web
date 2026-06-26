import { useTranslation } from 'react-i18next';

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

  const handleCreate = () => {
    modal.open(
      <CreateTimelineEventModal
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        currentMileage={currentMileage}
        fuelType={fuelType}
        vehicleFuelType={vehicleFuelType}
        onSuccess={() => modal.closeLast()}
      />,
      { title: t('timeline.actions.addEvent') },
    );
  };

  return { handleCreate };
};
