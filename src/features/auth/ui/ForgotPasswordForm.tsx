import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Field, Form, Input } from '@shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useForgotPasswordMutation } from '../api';
import {
  createForgotPasswordSchema,
  type ForgotPasswordFormProps,
  type ForgotPasswordValues,
} from '../model';

export const ForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormProps) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createForgotPasswordSchema(t));
  const defaultValues: ForgotPasswordValues = { email: '' };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({ resolver, defaultValues });

  const { mutate: forgotPassword, isPending, error } = useForgotPasswordMutation({ onSuccess });
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: ForgotPasswordValues) => {
    forgotPassword(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitLabel={t('auth.forgotPassword.form.submit')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Field label={t('auth.common.fields.email')} error={errors.email?.message}>
            <Input type="email" placeholder="email@example.com" size="lg" {...field} />
          </Field>
        )}
      />
    </Form>
  );
};
