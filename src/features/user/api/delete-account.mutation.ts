import { useMutation } from '@tanstack/react-query';

import { useErrorHandler } from '@shared/lib';

import { userApi } from './user.api';

import type { DeleteAccountDto } from '../model';

export const useDeleteAccountMutation = () => {
  const handleError = useErrorHandler();

  return useMutation({
    mutationFn: (dto: DeleteAccountDto) => userApi.deleteAccount(dto),
    onError: handleError,
  });
};
