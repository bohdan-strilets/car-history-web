import { Form, FormFieldInput } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { useForgotPasswordForm, type ForgotPasswordFormProps } from '../model';

export const ForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormProps) => {
  const { t } = useTranslation();
  const { control, errorMessage, handleSubmit, isPending } = useForgotPasswordForm({ onSuccess });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('auth.forgotPassword.form.submit')}
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
    </Form>
  );
};
