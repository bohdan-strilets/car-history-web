import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useMarkDoneMaintenanceIntervalMutation } from '../api';

import { markMaintenanceDoneDefaultValues } from './maintenance.default';
import { markMaintenanceDoneSchema, type MarkMaintenanceDoneValues } from './mark-done.schema';

import type { MarkMaintenanceDoneFormParams } from './types';

export const useMarkMaintenanceDoneForm = ({
  workspaceId,
  vehicleId,
  maintenanceId,
  currentMileage,
  onSuccess,
}: MarkMaintenanceDoneFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(markMaintenanceDoneSchema(t));
  const defaultValues = markMaintenanceDoneDefaultValues(currentMileage);

  const form = useForm<MarkMaintenanceDoneValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useMarkDoneMaintenanceIntervalMutation({
    workspaceId,
    vehicleId,
    maintenanceId,
    onSuccess,
  });

  const { mutate, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: MarkMaintenanceDoneValues) => {
    mutate(data);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
