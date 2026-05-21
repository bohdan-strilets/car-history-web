import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Form, FormFieldInput, FormFieldPasswordInput } from '@shared/ui';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useLoginMutation } from '../api';
import { createLoginSchema, type LoginValues } from '../model';

export const LoginForm = () => {
  const { t } = useTranslation();
  const resolver = zodResolver(createLoginSchema(t));
  const defaultValues: LoginValues = {
    email: '',
    password: '',
  };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginValues>({ resolver, defaultValues });

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
    </Form>
  );
};
