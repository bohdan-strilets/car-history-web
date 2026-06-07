import { useForgotPasswordMutation } from '@features/auth';
import { APP_CONSTANTS } from '@shared/config';
import { useCooldown } from '@shared/hooks';
import { useState } from 'react';

export const useForgotPassword = () => {
  const [sentTo, setSentTo] = useState<string | null>(null);

  const coldown = APP_CONSTANTS.RESEND_COOLDOWN;
  const { cooldown, start, isActive } = useCooldown(coldown);

  const handleSuccess = (email: string) => {
    setSentTo(email);
    start();
  };

  const mutation = useForgotPasswordMutation({ onSuccess: handleSuccess });
  const { mutate: resend, isPending } = mutation;

  const handleResend = () => {
    if (sentTo) resend({ email: sentTo });
  };

  return {
    sentTo,
    cooldown,
    isActive,
    isPending,
    handleSuccess,
    handleResend,
  };
};
