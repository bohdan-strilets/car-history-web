import { useUpdateWorkspaceMutation } from '@features/workspace';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { editWorkspaceDefaultValues } from '../default-values';
import { createWorkspaceSchema, type WorkspaceValues } from '../schemes';
import type { EditWorkspaceFormParams } from '../types';

export const useEditWorkspaceForm = ({ workspace, onSuccess }: EditWorkspaceFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createWorkspaceSchema(t));
  const defaultValues = editWorkspaceDefaultValues(workspace);

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
