import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useDeleteWorkspaceMutation } from '@features/workspace';
import { ROUTES } from '@shared/config';
import { useConfirmModal } from '@shared/lib/modal';

import type { DeleteWorkspaceParams } from './types';

export const useDeleteWorkspace = ({ onBeforeNavigate }: DeleteWorkspaceParams = {}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { confirm } = useConfirmModal();
  const { mutate: deleteWorkspace } = useDeleteWorkspaceMutation();

  const handleDelete = (workspaceId: string) => {
    confirm(
      {
        title: t('workspace.settings.danger.delete'),
        description: t('workspace.settings.danger.deleteConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          deleteWorkspace(workspaceId, {
            onSuccess: () => {
              close();
              onBeforeNavigate?.();
              navigate(ROUTES.WORKSPACES.ROOT);
            },
          });
        },
      },
    );
  };

  return { handleDelete };
};
