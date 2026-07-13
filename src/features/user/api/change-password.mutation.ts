import { useMutation } from '@tanstack/react-query';

import { useErrorHandler } from '@shared/lib';

import { userApi } from './user.api';

import type { ChangePasswordDto } from '../model';

export const useChangePasswordMutation = () => {
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (dto: ChangePasswordDto) => userApi.changePassword(dto),
    onError: handleError,
  });
};
