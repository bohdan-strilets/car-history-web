import { useTranslation } from 'react-i18next';

import { Form, FormFieldInput } from '@shared/ui';

import { useChangeEmailForm } from '../model';

import type { ChangeEmailFormParams } from '../model';

export const ChangeEmailForm = ({ onSuccess }: ChangeEmailFormParams) => {
  const { t } = useTranslation();
  const { control, errorMessage, handleSubmit, isPending } = useChangeEmailForm({ onSuccess });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('user.security.changeEmail')}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldInput
        control={control}
        name="newEmail"
        label={t('user.security.newEmail')}
        type="email"
        placeholder="email@example.com"
        size="lg"
      />
    </Form>
  );
};
