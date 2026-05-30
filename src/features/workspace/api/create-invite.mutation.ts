import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import type { CreateInviteDto } from '../model';

import { workspaceApi } from './workspace.api';

export const useCreateInviteMutation = (workspaceId: string) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (dto: CreateInviteDto) => {
      return workspaceApi.createInvite(workspaceId, dto);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.members(workspaceId) });
      showToast.success(t('workspace.invite.success'));
    },
  });
};
