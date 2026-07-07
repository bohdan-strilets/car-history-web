import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import type { ServiceStation } from '@entities/service-station';
import { useFormErrors } from '@shared/lib';

import { useUpdateServiceStationMutation } from '../api';

import {
  createServiceStationSchema,
  type CreateServiceStationValues,
} from './service-station.schema';

interface UseUpdateServiceStationFormParams {
  station: ServiceStation;
  onSuccess?: () => void;
}

export const useUpdateServiceStationForm = ({
  station,
  onSuccess,
}: UseUpdateServiceStationFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createServiceStationSchema(t));

  const defaultValues: CreateServiceStationValues = {
    name: station.name,
    type: station.type,
    address: {
      country: station.address.country,
      city: station.address.city,
      street: station.address.street,
      number: station.address.number,
      postCode: station.address.postCode ?? '',
    },
    latitude: station.latitude ?? undefined,
    longitude: station.longitude ?? undefined,
    phone: station.phone ?? '',
    website: station.website ?? '',
    notes: station.notes ?? '',
    googlePlaceId: station.googlePlaceId ?? undefined,
    googleRating: station.googleRating ? Number(station.googleRating) : undefined,
  };

  const form = useForm<CreateServiceStationValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError, setValue } = form;

  const mutation = useUpdateServiceStationMutation();
  const { mutate: update, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: CreateServiceStationValues) => {
    update({ id: station.id, dto: data }, { onSuccess });
  };

  return {
    control,
    setValue,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
