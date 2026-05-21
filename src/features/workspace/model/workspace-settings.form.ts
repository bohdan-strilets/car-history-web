import { zodResolver } from '@hookform/resolvers/zod';
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
  onSuccess,
}: WorkspaceSettingsFormParams) => {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<WorkspaceSettingsValues>({
    resolver: zodResolver(createWorkspaceSettingsSchema(t)),
    defaultValues: {
      currency: 'PLN',
      timezone: 'Europe/Warsaw',
      distanceUnit: 'KM',
      fuelUnit: 'L',
      dateFormat: 'DD_MM_YYYY',
    },
  });

  const { mutate: update, isPending } = useUpdateWorkspaceSettingsMutation();

  const onSubmit = (data: WorkspaceSettingsValues) => {
    update({ id: workspaceId, dto: data }, { onSuccess: (settings) => onSuccess(settings.data) });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
  };
};
