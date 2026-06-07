import { useTranslation } from 'react-i18next';

import { WORKSPACE_MEMBER_ROLE_CONFIG } from '@entities/workspace';
import { Form, FormFieldCardSelect, FormFieldInput } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

import { useInviteForm, type InviteFormProps } from '../model';

export const InviteForm = ({ workspaceId, onSuccess }: InviteFormProps) => {
  const { t } = useTranslation();

  const form = useInviteForm({ workspaceId, onSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('workspace.invite.send')}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldInput
        control={control}
        name="email"
        label={t('workspace.invite.fields.email')}
        placeholder="email@example.com"
        required
        size="lg"
      />

      <FormFieldCardSelect
        control={control}
        name="role"
        label={t('workspace.invite.fields.role')}
        required
        options={translateCardSelectOptions(t, WORKSPACE_MEMBER_ROLE_CONFIG)}
      />
    </Form>
  );
};
