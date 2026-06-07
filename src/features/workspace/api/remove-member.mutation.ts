import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { workspaceApi } from './workspace.api';

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
