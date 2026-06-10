import { useTranslation } from 'react-i18next';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib';

import { workspaceApi } from './workspace.api';

import type { CreateInviteDto } from '../model';

export const useCreateInviteMutation = (workspaceId: WorkspaceId) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (dto: CreateInviteDto) => {
      return workspaceApi.createInvite(workspaceId, dto);
    },

    onSuccess: () => {
      const memberKeys = queryKeys.workspaces.members(workspaceId);
      queryClient.invalidateQueries({ queryKey: memberKeys });

      const inviteKeys = queryKeys.workspaces.invites(workspaceId);
      queryClient.invalidateQueries({ queryKey: inviteKeys });

      showToast.success(t('workspace.invite.success'));
    },
  });
};
