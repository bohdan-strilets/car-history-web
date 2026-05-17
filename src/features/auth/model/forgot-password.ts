import { useForgotPasswordMutation } from '@features/auth';
import { APP_CONSTANTS } from '@shared/config';
import { useCooldown } from '@shared/hooks';
import { useState } from 'react';

export const useForgotPassword = () => {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const { cooldown, start, isActive } = useCooldown(APP_CONSTANTS.RESEND_COOLDOWN);

  const handleSuccess = (email: string) => {
    setSentTo(email);
    start();
  };

  const { mutate: resend, isPending } = useForgotPasswordMutation({
    onSuccess: handleSuccess,
  });

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
