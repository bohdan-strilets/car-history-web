import { useLeaveWorkspaceMutation } from '@features/workspace/api';
import { ROUTES } from '@shared/config';
import { useConfirmModal } from '@shared/lib/modal';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import type { LeaveWorkspaceParams } from './types';

export const useLeaveWorkspace = ({ onBeforeNavigate }: LeaveWorkspaceParams = {}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { confirm } = useConfirmModal();
  const { mutate: leaveWorkspace } = useLeaveWorkspaceMutation();

  const handleLeave = (workspaceId: string) => {
    confirm(
      {
        title: t('workspace.detail.leave'),
        description: t('workspace.detail.leaveConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          leaveWorkspace(workspaceId, {
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

  return { handleLeave };
};
