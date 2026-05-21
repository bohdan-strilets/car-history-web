import { useResetPasswordMutation, type ResetPasswordFormParams } from '@features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { createResetPasswordSchema, type ResetPasswordValues } from './reset-password.schema';

export const useResetPasswordForm = ({ token, onSuccess }: ResetPasswordFormParams) => {
  const { t } = useTranslation();

  const { control, handleSubmit, setError } = useForm<ResetPasswordValues>({
    resolver: zodResolver(createResetPasswordSchema(t)),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate: resetPassword, isPending, error } = useResetPasswordMutation({ onSuccess });
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: ResetPasswordValues) => {
    resetPassword({ token, password: data.password });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
