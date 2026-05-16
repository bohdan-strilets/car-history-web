import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Field } from '@shared/ui/components/field';
import { Form } from '@shared/ui/components/form';
import { Input } from '@shared/ui/primitives/input';
import { PasswordInput } from '@shared/ui/primitives/password-input';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useLoginMutation } from '../api';
import { createLoginSchema, type LoginValues } from '../model';

export const LoginForm = () => {
  const { t } = useTranslation();
  const resolver = zodResolver(createLoginSchema(t));

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginValues>({ resolver });

  const { mutate: login, isPending, error } = useLoginMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: LoginValues) => {
    login(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitLabel={t('auth.login.form.submit')}
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

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Field label={t('auth.common.fields.password')} error={errors.password?.message}>
            <PasswordInput placeholder="••••••••" size="lg" {...field} />
          </Field>
        )}
      />
    </Form>
  );
};
