import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUpdateWorkspaceSettingsMutation } from '@features/workspace';
import { useFormErrors } from '@shared/lib';

import { workspaceSettingsDefaultValues } from '../default-values';
import { createWorkspaceSettingsSchema, type WorkspaceSettingsValues } from '../schemes';

import type { WorkspaceSettingsFormParams } from '../types';

export const useWorkspaceSettingsForm = ({
  workspaceId,
  settings,
  onSuccess,
}: WorkspaceSettingsFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createWorkspaceSettingsSchema(t));
  const defaultValues = workspaceSettingsDefaultValues(settings);

  const form = useForm<WorkspaceSettingsValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateWorkspaceSettingsMutation();
  const { mutate: update, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: WorkspaceSettingsValues) => {
    update(
      { workspaceId, dto: data },
      {
        onSuccess: (res) => onSuccess(res.data),
      },
    );
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
