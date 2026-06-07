import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';
import { showToast, useErrorHandler } from '@shared/lib';

import { workspaceApi } from './workspace.api';

import type { InviteId, WorkspaceId } from '@entities/workspace';

export const useCancelInviteMutation = (workspaceId: WorkspaceId) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (inviteId: InviteId) => {
      return workspaceApi.cancelInvite(workspaceId, inviteId);
    },

    onSuccess: () => {
      const keys = queryKeys.workspaces.invites(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
      showToast.success(t('workspace.invite.cancelSuccess'));
    },

    onError: handleError,
  });
};
