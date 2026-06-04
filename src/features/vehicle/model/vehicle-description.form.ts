import { useUpdateVehicleMutation } from '@features/vehicle/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  createVehicleDescriptionSchema,
  type DescriptionValues,
} from './vehicle-description.schema';
import type { EditVehicleDescriptionParams } from './vehicle.types';

export const useEditVehicleDescriptionForm = ({
  vehicle,
  onSuccess,
}: EditVehicleDescriptionParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createVehicleDescriptionSchema(t));
  const defaultValues = { description: vehicle.description ?? '' };

  const { control, handleSubmit, setError } = useForm<DescriptionValues>({
    resolver,
    defaultValues,
  });

  const { mutate: update, isPending, error } = useUpdateVehicleMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: DescriptionValues) => {
    update(
      { id: vehicle.id, workspaceId: vehicle.workspaceId, dto: data },
      {
        onSuccess: () => {
          showToast.success(t('vehicle.detail.editSuccess'));
          onSuccess();
        },
      },
    );
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
