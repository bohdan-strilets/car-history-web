import {
  createResetPasswordSchema,
  useResetPasswordMutation,
  type ResetPasswordFormParams,
  type ResetPasswordValues,
} from '@features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useResetPasswordForm = ({ token, onSuccess }: ResetPasswordFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createResetPasswordSchema(t));
  const defaultValues: ResetPasswordValues = {
    password: '',
    confirmPassword: '',
  };

  const form = useForm<ResetPasswordValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useResetPasswordMutation({ onSuccess });
  const { mutate: resetPassword, isPending, error } = mutation;

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
