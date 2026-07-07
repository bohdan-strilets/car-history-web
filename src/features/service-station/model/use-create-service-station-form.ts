import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useCreateServiceStationMutation } from '../api';

import { createServiceStationDefaultValues } from './service-station.default';
import {
  createServiceStationSchema,
  type CreateServiceStationValues,
} from './service-station.schema';

interface UseCreateServiceStationFormParams {
  onSuccess?: () => void;
}

export const useCreateServiceStationForm = ({ onSuccess }: UseCreateServiceStationFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createServiceStationSchema(t));
  const defaultValues = createServiceStationDefaultValues();

  const form = useForm<CreateServiceStationValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError, setValue } = form;

  const mutation = useCreateServiceStationMutation();
  const { mutate: create, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: CreateServiceStationValues) => {
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
