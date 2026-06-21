import { useTranslation } from 'react-i18next';

import { useConfirmModal } from '@shared/lib/modal';

import { useDeleteTimelineEventMutation } from '../api';

import type { OpenDeleteEventParams } from './types';

export const useOpenDeleteEvent = ({
  workspaceId,
  vehicleId,
  eventId,
  onSuccess,
}: OpenDeleteEventParams) => {
  const { t } = useTranslation();
  const { confirm } = useConfirmModal();

  const { mutateAsync: deleteEvent } = useDeleteTimelineEventMutation({
    workspaceId,
    vehicleId,
    eventId,
    onSuccess,
  });

  const handleDelete = () => {
    confirm(
      {
        title: t('timeline.actions.deleteEvent'),
        description: t('timeline.actions.deleteConfirm'),
        danger: true,
      },
      {
        onConfirm: async () => {
          await deleteEvent();
        },
      },
    );
  };

  return { handleDelete };
};
