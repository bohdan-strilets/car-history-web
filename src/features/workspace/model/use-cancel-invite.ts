import type { WorkspaceInvite } from '@entities/workspace';
import { useCancelInviteMutation } from '@features/workspace/api';
import { useConfirmModal } from '@shared/lib/modal';
import { useTranslation } from 'react-i18next';

export const useCancelInvite = (workspaceId: string) => {
  const { t } = useTranslation();
  const { confirm } = useConfirmModal();
  const { mutate: cancelInvite } = useCancelInviteMutation(workspaceId);

  const handleCancelInvite = (invite: WorkspaceInvite) => {
    confirm(
      {
        title: t('workspace.invite.cancel'),
        description: t('workspace.invite.cancelConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          cancelInvite(invite.id, {
            onSuccess: () => close(),
            onError: () => close(),
          });
        },
      },
    );
  };

  return { handleCancelInvite };
};
