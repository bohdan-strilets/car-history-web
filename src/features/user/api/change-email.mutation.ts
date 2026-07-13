import { useMutation } from '@tanstack/react-query';

import { useErrorHandler } from '@shared/lib';

import { userApi } from './user.api';

import type { ChangeEmailDto } from '../model';

export const useChangeEmailMutation = () => {
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (dto: ChangeEmailDto) => userApi.changeEmail(dto),
    onError: handleError,
  });
};
