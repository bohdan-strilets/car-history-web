import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import type { UpdateWorkspaceDto } from '../model';

import { workspaceApi } from './workspace.api';

export const useUpdateWorkspaceMutation = (workspaceId: string) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (dto: UpdateWorkspaceDto) => {
      return workspaceApi.update(workspaceId, dto);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.workspaces.detail(workspaceId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.workspaces.all(),
      });
      showToast.success(t('workspace.detail.updateSuccess'));
    },
  });
};
