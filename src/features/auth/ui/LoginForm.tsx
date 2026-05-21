import { Form, FormFieldInput, FormFieldPasswordInput } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { useLoginForm } from '../model';

export const LoginForm = () => {
  const { t } = useTranslation();
  const { control, errorMessage, handleSubmit, isPending } = useLoginForm();

  return (
    <Form
      onSubmit={handleSubmit}
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
