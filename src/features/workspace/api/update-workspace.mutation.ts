import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import type { UpdateWorkspaceDto } from '../model';

import { workspaceApi } from './workspace.api';

export const useUpdateWorkspaceMutation = (workspaceId: WorkspaceId) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (dto: UpdateWorkspaceDto) => {
      return workspaceApi.update(workspaceId, dto);
    },

    onSuccess: () => {
      const keys = queryKeys.workspaces.all();
      queryClient.invalidateQueries({ queryKey: keys });
      showToast.success(t('workspace.detail.updateSuccess'));
    },
  });
};
