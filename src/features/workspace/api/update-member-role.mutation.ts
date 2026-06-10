import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib';

import { workspaceApi } from './workspace.api';

import type { UpdateMemberRoleParams } from '../model';

export const useUpdateMemberRoleMutation = (workspaceId: WorkspaceId) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ memberId, dto }: UpdateMemberRoleParams) => {
      return workspaceApi.updateMemberRole(workspaceId, memberId, dto);
    },

    onSuccess: () => {
      const keys = queryKeys.workspaces.members(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
      showToast.success(t('workspace.members.updateRoleSuccess'));
    },
  });
};
