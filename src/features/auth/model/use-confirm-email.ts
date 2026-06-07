import { APP_CONSTANTS, SEARCH_PARAM_TOKEN } from '@shared/config';
import { useCooldown } from '@shared/hooks';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useConfirmEmailMutation, useResendConfirmationMutation } from '../api/index.ts';

export const useConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get(SEARCH_PARAM_TOKEN) ?? '';

  const coldown = APP_CONSTANTS.RESEND_COOLDOWN;
  const { cooldown, start, isActive } = useCooldown(coldown);

  const {
    mutate: confirm,
    isPending: isConfirming,
    isSuccess,
    isError,
    error,
  } = useConfirmEmailMutation();

  const mutation = useResendConfirmationMutation({ onSuccess: start });
  const { mutate: resend, isPending: isResending } = mutation;

  useEffect(() => {
    if (token) confirm({ token });
  }, [confirm, token]);

  return {
    isConfirming,
    isSuccess,
    isError,
    error,
    isResending,
    cooldown,
    isActive,
    handleResend: () => resend(),
  };
};
