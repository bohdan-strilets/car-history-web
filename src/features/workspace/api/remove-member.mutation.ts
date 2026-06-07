import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';
import { showToast, useErrorHandler } from '@shared/lib';

import { workspaceApi } from './workspace.api';

import type { WorkspaceId } from '@entities/workspace';

export const useRemoveMemberMutation = (workspaceId: WorkspaceId) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (memberId: string) => {
      return workspaceApi.removeMember(workspaceId, memberId);
    },

    onSuccess: () => {
      const keys = queryKeys.workspaces.members(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
      showToast.success(t('workspace.members.removeSuccess'));
    },

    onError: handleError,
  });
};
