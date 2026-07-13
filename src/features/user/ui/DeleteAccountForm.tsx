import { useTranslation } from 'react-i18next';

import { Form, FormFieldPasswordInput, Hint } from '@shared/ui';

import { useDeleteAccountForm } from '../model';

import type { DeleteAccountFormParams } from '../model';

export const DeleteAccountForm = ({ onSuccess }: DeleteAccountFormParams) => {
  const { t } = useTranslation();
  const { control, errorMessage, handleSubmit, isPending } = useDeleteAccountForm({ onSuccess });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('user.danger.deleteAccount')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Hint message={t('user.danger.deleteAccountWarning')} variant="danger" />
      <FormFieldPasswordInput
        control={control}
        name="password"
        label={t('user.danger.confirmPassword')}
        placeholder="••••••••"
        size="lg"
      />
    </Form>
  );
};
