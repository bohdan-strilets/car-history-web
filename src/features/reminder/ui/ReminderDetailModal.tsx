import { useTranslation } from 'react-i18next';

import { ReminderDetail } from '@entities/reminder';
import {
  useCompleteReminderMutation,
  useDeleteReminderMutation,
  useDismissReminderMutation,
  useOpenEditReminder,
} from '@features/reminder';
import { useAdaptiveModal, useConfirmModal } from '@shared/lib/modal';

interface ReminderDetailModalProps {
  reminderId: string;
  reminder: import('@entities/reminder').Reminder;
  workspaceId: string;
  vehicleId: string;
}

export const ReminderDetailModal = ({
  reminderId,
  reminder,
  workspaceId,
  vehicleId,
}: ReminderDetailModalProps) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();
  const { confirm } = useConfirmModal();

  const complete = useCompleteReminderMutation({
    workspaceId,
    vehicleId,
    reminderId: reminderId,
    onSuccess: () => modal.closeAll(),
  });

  const dismiss = useDismissReminderMutation({
    workspaceId,
    vehicleId,
    reminderId: reminderId,
    onSuccess: () => modal.closeAll(),
  });

  const remove = useDeleteReminderMutation({
    workspaceId,
    vehicleId,
    reminderId: reminderId,
    onSuccess: () => modal.closeAll(),
  });

  const handleComplete = () => {
    confirm(
      {
        title: t('reminder.actions.complete'),
        description: t('reminder.actions.completeConfirm'),
        confirmLabel: t('common.actions.confirm'),
        cancelLabel: t('common.actions.cancel'),
        success: true,
      },
      {
        onConfirm: (done) => {
          complete.mutate(undefined, { onSuccess: done });
        },
      },
    );
  };

  const handleDismiss = () => {
    confirm(
      {
        title: t('reminder.actions.dismiss'),
        description: t('reminder.actions.dismissConfirm'),
        confirmLabel: t('common.actions.confirm'),
        cancelLabel: t('common.actions.cancel'),
        warning: true,
      },
      {
        onConfirm: (done) => {
          dismiss.mutate(undefined, { onSuccess: done });
        },
      },
    );
  };

  const handleDelete = () => {
    confirm(
      {
        title: t('reminder.actions.delete'),
        description: t('reminder.actions.deleteConfirm'),
        confirmLabel: t('common.actions.delete'),
        cancelLabel: t('common.actions.cancel'),
        danger: true,
      },
      {
        onConfirm: (done) => {
          remove.mutate(undefined, { onSuccess: done });
        },
      },
    );
  };

  const { handleEdit } = useOpenEditReminder({ workspaceId, vehicleId });

  return (
    <ReminderDetail
      reminder={reminder}
      onComplete={handleComplete}
      onDismiss={handleDismiss}
      onDelete={handleDelete}
      onEdit={() => handleEdit(reminder)}
    />
  );
};
