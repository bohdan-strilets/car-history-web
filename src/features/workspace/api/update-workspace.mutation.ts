import { queryKeys } from '@shared/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { UpdateWorkspaceDto } from '../model';

import { workspaceApi } from './workspace.api';

export const useUpdateWorkspaceMutation = (workspaceId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateWorkspaceDto) => workspaceApi.update(workspaceId, dto),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.workspaces.detail(workspaceId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.workspaces.all(),
      });
    },
  });
};
