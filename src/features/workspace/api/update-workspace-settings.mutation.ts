import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { UpdateWorkspaceSettingsParams } from '../model';

import { workspaceApi } from './workspace.api';

export const useUpdateWorkspaceSettingsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }: UpdateWorkspaceSettingsParams) => {
      return workspaceApi.updateSettings(id, dto);
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.settings(id) });
    },
  });
};
