import { useTranslation } from 'react-i18next';

import { Form, FormFieldPasswordInput } from '@shared/ui';

import { useChangePasswordForm } from '../model';

import type { ChangePasswordFormParams } from '../model';

export const ChangePasswordForm = ({ onSuccess }: ChangePasswordFormParams) => {
  const { t } = useTranslation();
  const { control, errorMessage, handleSubmit, isPending } = useChangePasswordForm({ onSuccess });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('user.security.changePassword')}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldPasswordInput
        control={control}
        name="currentPassword"
        label={t('user.security.currentPassword')}
        placeholder="••••••••"
        size="lg"
      />
      <FormFieldPasswordInput
        control={control}
        name="newPassword"
        label={t('user.security.newPassword')}
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
