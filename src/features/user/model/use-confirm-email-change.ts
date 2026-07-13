import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { SEARCH_PARAM_TOKEN } from '@shared/config';

import { useConfirmEmailChangeMutation } from '../api';

export const useConfirmEmailChange = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get(SEARCH_PARAM_TOKEN) ?? '';

  const {
    mutate: confirm,
    isPending: isConfirming,
    isSuccess,
    isError,
  } = useConfirmEmailChangeMutation();

  useEffect(() => {
    if (token) confirm({ token });
  }, [confirm, token]);

  return { isConfirming, isSuccess, isError };
};
