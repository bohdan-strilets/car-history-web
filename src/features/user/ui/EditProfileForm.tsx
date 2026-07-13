import { useTranslation } from 'react-i18next';

import { Form, FormFieldInput } from '@shared/ui';

import { useEditProfileForm } from '../model';

import type { EditProfileFormParams } from '../model';

export const EditProfileForm = ({ defaultValues, onSuccess }: EditProfileFormParams) => {
  const { t } = useTranslation();
  const { control, errorMessage, handleSubmit, isPending } = useEditProfileForm({
    defaultValues,
    onSuccess,
  });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.actions.save')}
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
    </Form>
  );
};
