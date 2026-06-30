import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useCreateMaintenanceIntervalMutation } from '../api';

import { createMaintenanceIntervalDefaultValues } from './maintenance.default';
import {
  createMaintenanceIntervalSchema,
  type CreateMaintenanceIntervalValues,
} from './maintenance.schema';

import type { CreateMaintenanceIntervalFormParams } from './types';

export const useCreateMaintenanceIntervalForm = ({
  workspaceId,
  vehicleId,
  currentMileage,
  onSuccess,
}: CreateMaintenanceIntervalFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createMaintenanceIntervalSchema(t));
  const defaultValues = createMaintenanceIntervalDefaultValues(currentMileage);

  const form = useForm<CreateMaintenanceIntervalValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError, setValue } = form;

  const mutation = useCreateMaintenanceIntervalMutation({ workspaceId, vehicleId });
  const { mutate: create, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: CreateMaintenanceIntervalValues) => {
    create(data, { onSuccess });
  };

  return {
    control,
    setValue,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
