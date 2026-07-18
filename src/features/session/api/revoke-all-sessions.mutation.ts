import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sessionApi } from '@entities/session';
import { queryKeys } from '@shared/config';
import { showToast, useErrorHandler } from '@shared/lib';

export const useRevokeAllSessionsMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: () => {
      return sessionApi.revokeAll();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.sessions() });
      showToast.success(t('user.sessions.revokeAllSuccess'));
    },

    onError: handleError,
  });
};
