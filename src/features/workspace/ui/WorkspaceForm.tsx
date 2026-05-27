import { WORKSPACE_TYPE_CONFIG } from '@entities/workspace';
import { Form, FormFieldCardSelect, FormFieldInput } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { useWorkspaceForm, type WorkspaceFormProps } from '../model';

export const WorkspaceForm = ({ onSuccess, submitLabel }: WorkspaceFormProps) => {
  const { t } = useTranslation();
  const { control, handleSubmit, isPending, errorMessage } = useWorkspaceForm({ onSuccess });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={submitLabel}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldCardSelect
        control={control}
        name="type"
        options={translateCardSelectOptions(t, WORKSPACE_TYPE_CONFIG)}
      />

      <FormFieldInput
        control={control}
        name="name"
        label={t('workspace.fields.name.label')}
        size="lg"
        placeholder={t('workspace.fields.name.placeholder')}
      />
    </Form>
  );
};
