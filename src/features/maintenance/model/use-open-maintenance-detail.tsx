import { useTranslation } from 'react-i18next';

import type { MaintenanceInterval } from '@entities/maintenance';
import { useAdaptiveModal } from '@shared/lib/modal';

import { MaintenanceDetailModal } from '../ui';

import type { OpenMaintenanceDetailParams } from './types';

export const useOpenMaintenanceDetail = ({
  workspaceId,
  vehicleId,
  currentMileage,
}: OpenMaintenanceDetailParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleOpen = (interval: MaintenanceInterval) => {
    modal.open(
      <MaintenanceDetailModal
        interval={interval}
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        currentMileage={currentMileage}
      />,
      { title: t(`enums.maintenanceType.${interval.type}`) },
    );
  };

  return { handleOpen };
};
