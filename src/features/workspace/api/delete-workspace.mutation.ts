import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { showToast, useErrorHandler } from '@shared/lib';

import { workspaceApi } from './workspace.api';

export const useDeleteWorkspaceMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (workspaceId: WorkspaceId) => {
      return workspaceApi.delete(workspaceId);
    },

    onSuccess: () => {
      const workspaceKey = queryKeys.workspaces.all();
      queryClient.invalidateQueries({ queryKey: workspaceKey });
      showToast.success(t('workspace.deleteWorkspaceSuccess'));
    },

    onError: handleError,
  });
};
