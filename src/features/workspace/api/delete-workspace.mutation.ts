import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { WorkspaceId } from '@entities/workspace';
import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib';

import { workspaceApi } from './workspace.api';

export const useDeleteWorkspaceMutation = () => {
  const queryClient = useQueryClient();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (workspaceId: WorkspaceId) => {
      return workspaceApi.delete(workspaceId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.all() });
    },

    onError: handleError,
  });
};
