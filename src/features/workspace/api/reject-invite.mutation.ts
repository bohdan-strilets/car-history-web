import { useErrorHandler } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { workspaceApi } from './workspace.api';

export const useRejectInviteMutation = () => {
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (token: string) => workspaceApi.rejectInvite(token),

    onSuccess: () => {
      showToast.info(t('workspace.invite.rejectSuccess'));
    },

    onError: handleError,
  });
};
