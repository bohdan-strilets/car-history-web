import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { workspaceApi } from './workspace.api';

export const useCancelInviteMutation = (workspaceId: string) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (inviteId: string) => {
      return workspaceApi.cancelInvite(workspaceId, inviteId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.invites(workspaceId) });
      showToast.success(t('workspace.invite.cancelSuccess'));
    },

    onError: handleError,
  });
};
