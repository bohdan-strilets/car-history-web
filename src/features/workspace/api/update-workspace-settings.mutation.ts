import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { workspaceApi } from './workspace.api';

import type { UpdateWorkspaceSettingsParams } from '../model';

export const useUpdateWorkspaceSettingsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ workspaceId, dto }: UpdateWorkspaceSettingsParams) => {
      return workspaceApi.updateSettings(workspaceId, dto);
    },

    onSuccess: (_, { workspaceId }) => {
      const keys = queryKeys.workspaces.settings(workspaceId);
      queryClient.invalidateQueries({ queryKey: keys });
    },
  });
};
