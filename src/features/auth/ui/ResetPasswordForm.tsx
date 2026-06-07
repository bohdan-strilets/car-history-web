import { useTranslation } from 'react-i18next';

import { Form, FormFieldPasswordInput } from '@shared/ui';

import { useResetPasswordForm, type ResetPasswordFormProps } from '../model';

export const ResetPasswordForm = ({ token, onSuccess }: ResetPasswordFormProps) => {
  const { t } = useTranslation();

  const form = useResetPasswordForm({ token, onSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  return (
    <Form
      onSubmit={handleSubmit}
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
