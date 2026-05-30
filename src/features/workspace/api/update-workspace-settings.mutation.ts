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
    mutationFn: ({ id, dto }: UpdateWorkspaceSettingsParams) => {
      return workspaceApi.updateSettings(id, dto);
    },

    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.settings(id) });
      showToast.success(t('workspace.settings.updateSuccess'));
    },
  });
};
