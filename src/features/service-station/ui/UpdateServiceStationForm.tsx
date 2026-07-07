import { useTranslation } from 'react-i18next';

import {
  PlacesAutocomplete,
  SERVICE_STATION_TYPE_CONFIG,
  type PlaceDetails,
  type ServiceStation,
} from '@entities/service-station';
import { Form, FormFieldCardSelect, FormFieldInput, FormFieldTextarea, Stack } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

import { useUpdateServiceStationForm } from '../model';

interface UpdateServiceStationFormProps {
  station: ServiceStation;
  onSuccess?: () => void;
}

export const UpdateServiceStationForm = ({ station, onSuccess }: UpdateServiceStationFormProps) => {
  const { t } = useTranslation();

  const { control, setValue, handleSubmit, isPending, errorMessage } = useUpdateServiceStationForm({
    station,
    onSuccess,
  });

  const handlePlaceSelect = (place: PlaceDetails) => {
    setValue('name', place.name, { shouldValidate: true });
    setValue('address.country', place.address.country, { shouldValidate: true });
    setValue('address.city', place.address.city, { shouldValidate: true });
    setValue('address.street', place.address.street, { shouldValidate: true });
    setValue('address.number', place.address.number, { shouldValidate: true });
    setValue('address.postCode', place.address.postCode ?? '');
    setValue('latitude', place.latitude);
    setValue('longitude', place.longitude);
    setValue('phone', place.phone ?? '');
    setValue('website', place.website ?? '');
    setValue('googlePlaceId', place.placeId);
    setValue('googleRating', place.rating ?? undefined);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.actions.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Stack gap="md">
        <PlacesAutocomplete onSelect={handlePlaceSelect} />

        <FormFieldCardSelect
          control={control}
          name="type"
          options={translateCardSelectOptions(t, SERVICE_STATION_TYPE_CONFIG)}
        />

        <FormFieldInput control={control} name="name" label={t('fields.name')} size="lg" />

        <Stack direction="row" gap="md">
          <FormFieldInput
            control={control}
            name="address.street"
            label={t('fields.address')}
            size="lg"
          />
          <FormFieldInput
            control={control}
            name="address.number"
            label={t('serviceStation.fields.number')}
            size="lg"
          />
        </Stack>

        <Stack direction="row" gap="md">
          <FormFieldInput
            control={control}
            name="address.city"
            label={t('serviceStation.fields.city')}
            size="lg"
          />
          <FormFieldInput
            control={control}
            name="address.postCode"
            label={t('serviceStation.fields.postCode')}
            size="lg"
          />
        </Stack>

        <FormFieldInput control={control} name="phone" label={t('fields.phone')} size="lg" />
        <FormFieldInput control={control} name="website" label={t('fields.website')} size="lg" />
        <FormFieldTextarea control={control} name="notes" label={t('fields.notes')} size="lg" />
      </Stack>
    </Form>
  );
};
