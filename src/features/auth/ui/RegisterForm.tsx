import { useTranslation } from 'react-i18next';

import { Form, FormFieldInput, FormFieldPasswordInput } from '@shared/ui';

import { useRegisterForm } from '../model';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const { control, errorMessage, handleSubmit, isPending } = useRegisterForm();

  return (
    <Form
      onSubmit={handleSubmit}
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
