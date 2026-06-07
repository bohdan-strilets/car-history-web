import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { workspaceApi } from './workspace.api';

export const useLeaveWorkspaceMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (workspaceId: WorkspaceId) => {
      return workspaceApi.leave(workspaceId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.all() });
      showToast.success(t('workspace.detail.leaveSuccess'));
    },

    onError: handleError,
  });
};
