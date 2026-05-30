import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useUpdateWorkspaceMutation } from '../api';

import { createWorkspaceSchema, type WorkspaceValues } from './workspace.schema';
import type { EditWorkspaceFormParams } from './workspace.types';

export const useEditWorkspaceForm = ({ workspace, onSuccess }: EditWorkspaceFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createWorkspaceSchema(t));

  const defaultValues: WorkspaceValues = {
    name: workspace.name,
    type: workspace.type,
  };

  const form = useForm<WorkspaceValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateWorkspaceMutation(workspace.id);
  const { mutate: update, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: WorkspaceValues) => {
    update(data, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
