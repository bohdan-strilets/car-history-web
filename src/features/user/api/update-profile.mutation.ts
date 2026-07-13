import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';
import { useErrorHandler } from '@shared/lib';

import { userApi } from './user.api';

import type { UpdateProfileDto } from '../model';

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (dto: UpdateProfileDto) => {
      return userApi.updateProfile(dto);
    },
    onSuccess: () => {
      const keys = queryKeys.user.me();
      queryClient.invalidateQueries({ queryKey: keys });
    },
    onError: handleError,
  });
};
