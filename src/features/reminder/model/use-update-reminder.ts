import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useUpdateReminderMutation } from '../api';

import { updateReminderDefaultValues } from './reminder.default';
import { createReminderSchema, type CreateReminderValues } from './reminder.schema';

import type { UpdateReminderFormParams } from './types';

export const useUpdateReminderForm = ({
  workspaceId,
  vehicleId,
  reminder,
  onSuccess,
}: UpdateReminderFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createReminderSchema(t));
  const defaultValues = updateReminderDefaultValues(reminder);

  const form = useForm<CreateReminderValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError, setValue } = form;

  const mutation = useUpdateReminderMutation({
    workspaceId,
    vehicleId,
    reminderId: reminder.id,
    onSuccess,
  });

  const { mutate: update, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: CreateReminderValues) => {
    update({
      type: data.type,
      title: data.title,
      description: data.description || undefined,
      dueDate: data.dueDate || undefined,
      dueMileage: Number.isNaN(data.dueMileage) ? undefined : data.dueMileage,
    });
  };

  return {
    control,
    setValue,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
