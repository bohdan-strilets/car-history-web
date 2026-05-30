import { WORKSPACE_TYPE } from '@entities/workspace';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useCreateWorkspaceMutation } from '../api';

import { createWorkspaceSchema, type WorkspaceValues } from './workspace.schema';
import type { WorkspaceFormParams } from './workspace.types';

export const useWorkspaceForm = ({ onSuccess }: WorkspaceFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createWorkspaceSchema(t));

  const defaultValues: WorkspaceValues = {
    name: '',
    type: WORKSPACE_TYPE.PERSONAL,
  };

  const form = useForm<WorkspaceValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const { mutate: create, isPending, error } = useCreateWorkspaceMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: WorkspaceValues) => {
    create(data, { onSuccess: (workspace) => onSuccess(workspace.data) });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
