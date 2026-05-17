import { APP_CONSTANTS } from '@shared/config';
import { useCooldown } from '@shared/hooks';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useConfirmEmailMutation, useResendConfirmationMutation } from '../api';

export const useConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const { cooldown, start, isActive } = useCooldown(APP_CONSTANTS.RESEND_COOLDOWN);

  const {
    mutate: confirm,
    isPending: isConfirming,
    isSuccess,
    isError,
    error,
  } = useConfirmEmailMutation();

  const { mutate: resend, isPending: isResending } = useResendConfirmationMutation({
    onSuccess: start,
  });

  useEffect(() => {
    if (token) confirm({ token });
  }, []);

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
