import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useUpdateWorkspaceSettingsMutation } from '../api';

import {
  createWorkspaceSettingsSchema,
  type WorkspaceSettingsValues,
} from './workspace-settings.schema';
import type { WorkspaceSettingsFormParams } from './workspace.types';

export const useWorkspaceSettingsForm = ({
  workspaceId,
  settings,
  onSuccess,
}: WorkspaceSettingsFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createWorkspaceSettingsSchema(t));

  const defaultValues: WorkspaceSettingsValues = {
    currency: settings?.currency ?? 'PLN',
    timezone: settings?.timezone ?? 'Europe/Warsaw',
    distanceUnit: settings?.distanceUnit ?? 'KM',
    fuelUnit: settings?.fuelUnit ?? 'L',
    dateFormat: settings?.dateFormat ?? 'DD_MM_YYYY',
  };

  const form = useForm<WorkspaceSettingsValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateWorkspaceSettingsMutation();
  const { mutate: update, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: WorkspaceSettingsValues) => {
    update({ id: workspaceId, dto: data }, { onSuccess: (res) => onSuccess(res.data) });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
