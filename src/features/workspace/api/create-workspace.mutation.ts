import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib';

import { workspaceApi } from './workspace.api';

import type { CreateWorkspaceDto } from '../model';

export const useCreateWorkspaceMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateWorkspaceDto) => {
      return workspaceApi.create(dto);
    },

    onSuccess: () => {
      const workspaceKey = queryKeys.workspaces.all();
      queryClient.invalidateQueries({ queryKey: workspaceKey });
      showToast.success(t('workspace.createWorkspaceSuccess'));
    },
  });
};
