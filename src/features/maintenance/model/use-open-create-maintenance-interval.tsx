import { useTranslation } from 'react-i18next';

import { useAdaptiveModal } from '@shared/lib/modal';

import { CreateMaintenanceIntervalForm } from '../ui';

import type { OpenCreateMaintenanceIntervalParams } from './types';

export const useOpenCreateMaintenanceInterval = ({
  workspaceId,
  vehicleId,
  currentMileage,
}: OpenCreateMaintenanceIntervalParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleCreate = () => {
    const id = modal.open(
      <CreateMaintenanceIntervalForm
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        currentMileage={currentMileage}
        onSuccess={() => modal.close(id)}
      />,
      { title: t('maintenance.actions.add') },
    );
  };

  return { handleCreate };
};
