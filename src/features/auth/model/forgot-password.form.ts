import { useForgotPasswordMutation } from '@features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ForgotPasswordFormParams } from './auth.types';
import { createForgotPasswordSchema, type ForgotPasswordValues } from './forgot-password.schema';

export const useForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormParams) => {
  const { t } = useTranslation();

  const { control, handleSubmit, setError } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(createForgotPasswordSchema(t)),
    defaultValues: { email: '' },
  });

  const { mutate: forgotPassword, isPending, error } = useForgotPasswordMutation({ onSuccess });
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: ForgotPasswordValues) => forgotPassword(data);

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
