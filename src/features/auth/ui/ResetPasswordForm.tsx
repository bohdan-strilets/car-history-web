import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Field, Form, PasswordInput } from '@shared/ui';
import { Controller, useForm } from 'react-hook-form';
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
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Field label={t('auth.common.fields.password')} error={errors.password?.message}>
            <PasswordInput placeholder="••••••••" size="lg" {...field} />
          </Field>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <Field
            label={t('auth.common.fields.confirmPassword')}
            error={errors.confirmPassword?.message}
          >
            <PasswordInput placeholder="••••••••" size="lg" {...field} />
          </Field>
        )}
      />
    </Form>
  );
};
