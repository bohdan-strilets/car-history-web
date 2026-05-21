import { WORKSPACE_TYPE, WORKSPACE_TYPE_CONFIG, type Workspace } from '@entities/workspace';
import { useCreateWorkspaceMutation } from '@features/workspace';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { CardSelect, Form, FormField } from '@shared/ui/components';
import { Input } from '@shared/ui/primitives';
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
      <FormField
        control={control}
        name="type"
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, WORKSPACE_TYPE_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />

      <FormField
        control={control}
        name="name"
        label={t('workspace.fields.name.label')}
        render={(field) => (
          <Input size="lg" placeholder={t('workspace.fields.name.placeholder')} {...field} />
        )}
      />
    </Form>
  );
};
