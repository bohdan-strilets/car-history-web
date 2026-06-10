import { useTranslation } from 'react-i18next';

import type { WorkspaceMember } from '@entities/workspace';
import { useRemoveMemberMutation } from '@features/workspace';
import { useConfirmModal } from '@shared/lib/modal';
import { useModal } from '@shared/ui';

export const useRemoveMember = (workspaceId: string) => {
  const { t } = useTranslation();
  const { confirm } = useConfirmModal();
  const modal = useModal();
  const { mutate: removeMember } = useRemoveMemberMutation(workspaceId);

  const handleRemoveMember = (member: WorkspaceMember) => {
    confirm(
      {
        title: t('workspace.members.remove'),
        description: t('workspace.members.removeConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          removeMember(member.id, {
            onSuccess: () => {
              close();
              modal.closeAll();
            },
            onError: () => close(),
          });
        },
      },
    );
  };

  return { handleRemoveMember };
};
