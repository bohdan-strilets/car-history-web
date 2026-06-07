import type { InviteId, WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { workspaceApi } from './workspace.api';

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
