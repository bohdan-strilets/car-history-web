import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { workspaceApi } from './workspace.api';

export const useDeleteWorkspaceMutation = () => {
  const queryClient = useQueryClient();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (id: string) => workspaceApi.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workspaces.all() });
    },

    onError: handleError,
  });
};
