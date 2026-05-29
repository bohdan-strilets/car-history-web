import { WORKSPACE_ROLE_CONFIG } from '@entities/workspace';
import { Form, FormFieldCardSelect, FormFieldInput } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { useInviteForm } from '../model/invite.form';

interface InviteFormProps {
  workspaceId: string;
  onSuccess: () => void;
}

export const InviteForm = ({ workspaceId, onSuccess }: InviteFormProps) => {
  const { t } = useTranslation();
  const { control, handleSubmit, isPending, errorMessage } = useInviteForm({
    workspaceId,
    onSuccess,
  });

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
        options={translateCardSelectOptions(t, WORKSPACE_ROLE_CONFIG)}
      />
    </Form>
  );
};
