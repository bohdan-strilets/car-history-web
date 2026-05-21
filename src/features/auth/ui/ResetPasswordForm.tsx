import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Form, FormFieldPasswordInput } from '@shared/ui';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useResetPasswordMutation } from '../api';
import {
  createResetPasswordSchema,
  type ResetPasswordFormProps,
  type ResetPasswordValues,
} from '../model';

export const ResetPasswordForm = ({ token, onSuccess }: ResetPasswordFormProps) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createResetPasswordSchema(t));
  const defaultValues: ResetPasswordValues = {
    password: '',
    confirmPassword: '',
  };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ResetPasswordValues>({ resolver, defaultValues });

  const { mutate: resetPassword, isPending, error } = useResetPasswordMutation({ onSuccess });
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: ResetPasswordValues) => {
    resetPassword({ token, password: data.password });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitLabel={t('auth.resetPassword.form.submit')}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldPasswordInput
        control={control}
        name="password"
        label={t('auth.common.fields.password')}
        placeholder="••••••••"
        size="lg"
      />

      <FormFieldPasswordInput
        control={control}
        name="confirmPassword"
        label={t('auth.common.fields.confirmPassword')}
        placeholder="••••••••"
        size="lg"
      />
    </Form>
  );
};
