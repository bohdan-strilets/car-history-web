import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateWorkspaceMutation } from '@features/workspace';
import { useFormErrors } from '@shared/lib';

import { workspaceDefaultValues } from '../default-values';
import { createWorkspaceSchema, type WorkspaceValues } from '../schemes';

import type { WorkspaceFormParams } from '../types';

export const useWorkspaceForm = ({ onSuccess }: WorkspaceFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createWorkspaceSchema(t));
  const defaultValues = workspaceDefaultValues();

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
