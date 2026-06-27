import { useTranslation } from 'react-i18next';

import type { Reminder } from '@entities/reminder';
import { useAdaptiveModal } from '@shared/lib/modal';

import { EditReminderForm } from '../ui';

import type { OpenEditReminderParams } from './types';

export const useOpenEditReminder = ({ workspaceId, vehicleId }: OpenEditReminderParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleEdit = (reminder: Reminder) => {
    const id = modal.open(
      <EditReminderForm
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        reminder={reminder}
        onSuccess={() => modal.close(id)}
      />,
      { title: t('common.actions.edit') },
    );
  };

  return { handleEdit };
};
