import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { workspaceApi } from './workspace.api';

export const useAcceptInviteMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (token: string) => workspaceApi.acceptInvite(token),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.all() });
      showToast.success(t('workspace.invite.acceptSuccess'));
    },

    onError: handleError,
  });
};
