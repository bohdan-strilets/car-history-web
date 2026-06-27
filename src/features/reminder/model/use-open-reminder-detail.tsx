import { useTranslation } from 'react-i18next';

import type { Reminder } from '@entities/reminder';
import { useAdaptiveModal } from '@shared/lib/modal';

import { ReminderDetailModal } from '../ui';

interface UseOpenReminderDetailParams {
  workspaceId: string;
  vehicleId: string;
}

export const useOpenReminderDetail = ({ workspaceId, vehicleId }: UseOpenReminderDetailParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleOpen = (reminder: Reminder) => {
    modal.open(
      <ReminderDetailModal
        reminderId={reminder.id}
        reminder={reminder}
        workspaceId={workspaceId}
        vehicleId={vehicleId}
      />,
      { title: t(`enums.reminderType.${reminder.type}`) },
    );
  };

  return { handleOpen };
};
