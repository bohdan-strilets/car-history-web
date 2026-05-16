import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Field } from '@shared/ui/components/field';
import { Form } from '@shared/ui/components/form';
import { Input } from '@shared/ui/primitives/input';
import { PasswordInput } from '@shared/ui/primitives/password-input';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useRegisterMutation } from '../api';
import { createRegisterSchema, type RegisterDto, type RegisterValues } from '../model';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const resolver = zodResolver(createRegisterSchema(t));
  const defaultValues: RegisterValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterValues>({ resolver, defaultValues });

  const { mutate: register, isPending, error } = useRegisterMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: RegisterValues) => {
    const dto: RegisterDto = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    register(dto);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitLabel={t('auth.register.form.submit')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <Field label={t('auth.common.fields.firstName')} error={errors.firstName?.message}>
            <Input size="lg" {...field} />
          </Field>
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <Field label={t('auth.common.fields.lastName')} error={errors.lastName?.message}>
            <Input size="lg" {...field} />
          </Field>
        )}
      />

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
