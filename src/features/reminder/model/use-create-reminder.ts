import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useCreateReminderMutation } from '../api';

import { createReminderDefaultValues } from './reminder.default';
import { createReminderSchema, type CreateReminderValues } from './reminder.schema';

import type { CreateReminderFormParams } from './types';

export const useCreateReminderForm = ({
  workspaceId,
  vehicleId,
  currentMileage,
  onSuccess,
}: CreateReminderFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createReminderSchema(t, currentMileage));
  const defaultValues = createReminderDefaultValues(currentMileage);

  const form = useForm<CreateReminderValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useCreateReminderMutation({ workspaceId, vehicleId });
  const { mutate: create, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: CreateReminderValues) => {
    create(
      {
        type: data.type,
        title: data.title,
        description: data.description || undefined,
        dueDate: data.dueDate || undefined,
      },
      { onSuccess },
    );
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
