import { useTranslation } from 'react-i18next';

import { useAdaptiveModal } from '@shared/lib/modal';

import { CreateReminderForm } from '../ui';

import type { OpenCreateReminderParams } from './types';

export const useOpenCreateReminder = ({
  workspaceId,
  vehicleId,
  currentMileage,
}: OpenCreateReminderParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleCreate = () => {
    const id = modal.open(
      <CreateReminderForm
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        currentMileage={currentMileage}
        onSuccess={() => modal.close(id)}
      />,
      { title: t('reminder.actions.add') },
    );
  };

  return { handleCreate };
};
