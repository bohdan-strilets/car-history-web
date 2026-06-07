import { WORKSPACE_MEMBER_ROLE_CONFIG } from '@entities/workspace/model';
import { Form, FormFieldCardSelect } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { useEditMemberRoleForm, type EditMemberRoleModalProps } from '../model';

export const EditMemberRoleModal = ({
  workspaceId,
  member,
  onSuccess,
}: EditMemberRoleModalProps) => {
  const { t } = useTranslation();

  const form = useEditMemberRoleForm({ workspaceId, member, onSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.actions.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldCardSelect
        control={control}
        name="role"
        options={translateCardSelectOptions(t, WORKSPACE_MEMBER_ROLE_CONFIG)}
      />
    </Form>
  );
};
