import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useUpdateMaintenanceIntervalMutation } from '../api';

import {
  editMaintenanceIntervalSchema,
  type EditMaintenanceIntervalValues,
} from './edit-maintenance.schema';
import { editMaintenanceIntervalDefaultValues } from './maintenance.default';

import type { EditMaintenanceIntervalFormParams } from './types';

export const useEditMaintenanceIntervalForm = ({
  workspaceId,
  vehicleId,
  interval,
  onSuccess,
}: EditMaintenanceIntervalFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(editMaintenanceIntervalSchema(t));
  const defaultValues = editMaintenanceIntervalDefaultValues(interval);

  const form = useForm<EditMaintenanceIntervalValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateMaintenanceIntervalMutation({
    workspaceId,
    vehicleId,
    maintenanceId: interval.id,
  });

  const { mutate: update, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: EditMaintenanceIntervalValues) => {
    update(data, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
