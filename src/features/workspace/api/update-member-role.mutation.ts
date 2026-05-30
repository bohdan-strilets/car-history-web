import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import type { UpdateMemberRoleDto } from '../model';

import { workspaceApi } from './workspace.api';

export const useUpdateMemberRoleMutation = (workspaceId: string) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ memberId, dto }: { memberId: string; dto: UpdateMemberRoleDto }) => {
      return workspaceApi.updateMemberRole(workspaceId, memberId, dto);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.members(workspaceId) });
      showToast.success(t('workspace.members.updateRoleSuccess'));
    },
  });
};
