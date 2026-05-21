import { WORKSPACE_TYPE, WORKSPACE_TYPE_CONFIG, type Workspace } from '@entities/workspace';
import { useCreateWorkspaceMutation } from '@features/workspace';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { Form, FormFieldCardSelect, FormFieldInput } from '@shared/ui/components';
import { translateCardSelectOptions } from '@shared/utils';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { createWorkspaceSchema, type WorkspaceValues } from '../model';

interface WorkspaceFormProps {
  onSuccess: (workspace: Workspace) => void;
}

export const WorkspaceForm = ({ onSuccess }: WorkspaceFormProps) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createWorkspaceSchema(t));
  const defaultValues: WorkspaceValues = {
    name: '',
    type: WORKSPACE_TYPE.PERSONAL,
  };

  const { control, handleSubmit, setError } = useForm<WorkspaceValues>({ resolver, defaultValues });

  const { mutate: create, isPending, error } = useCreateWorkspaceMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: WorkspaceValues) => {
    create(data, {
      onSuccess: (workspace) => onSuccess(workspace.data),
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitLabel={t('common.next')}
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
