import { queryKeys } from '@shared/config';
import { showToast } from '@shared/lib/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import type { UpdateWorkspaceSettingsParams } from '../model';

import { workspaceApi } from './workspace.api';

export const useUpdateWorkspaceSettingsMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ workspaceId, dto }: UpdateWorkspaceSettingsParams) => {
      return workspaceApi.updateSettings(workspaceId, dto);
    },

    onSuccess: (_, { workspaceId }) => {
      const keys = queryKeys.workspaces.settings(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
      showToast.success(t('workspace.settings.updateSuccess'));
    },
  });
};
