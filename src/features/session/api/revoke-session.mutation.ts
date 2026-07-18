import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sessionApi, type SessionId } from '@entities/session';
import { queryKeys } from '@shared/config';
import { showToast, useErrorHandler } from '@shared/lib';

export const useRevokeSessionMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (sessionId: SessionId) => {
      return sessionApi.revoke(sessionId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.sessions() });
      showToast.success(t('user.sessions.revokeSuccess'));
    },

    onError: handleError,
  });
};
