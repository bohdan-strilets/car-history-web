import { useTranslation } from 'react-i18next';

import { useMutation } from '@tanstack/react-query';

import { showToast, useErrorHandler } from '@shared/lib';

import { workspaceApi } from './workspace.api';

import type { InviteToken } from '@entities/workspace';

export const useRejectInviteMutation = () => {
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (token: InviteToken) => {
      return workspaceApi.rejectInvite(token);
    },

    onSuccess: () => {
      showToast.info(t('workspace.invite.rejectSuccess'));
    },

    onError: handleError,
  });
};
