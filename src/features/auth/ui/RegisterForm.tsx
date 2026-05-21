import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Form, FormFieldInput, FormFieldPasswordInput } from '@shared/ui';
import { useForm } from 'react-hook-form';
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
      <FormFieldInput
        control={control}
        name="firstName"
        label={t('auth.common.fields.firstName')}
        size="lg"
      />

      <FormFieldInput
        control={control}
        name="lastName"
        label={t('auth.common.fields.lastName')}
        size="lg"
      />

      <FormFieldInput
        control={control}
        name="email"
        label={t('auth.common.fields.email')}
        type="email"
        placeholder="email@example.com"
        size="lg"
      />

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
