import z from 'zod';

import { VehicleConstraints } from '@entities/vehicle';

import type { TFunction } from 'i18next';

export const createVehicleDescriptionSchema = (t: TFunction) =>
  z.object({
    description: z
      .string()
      .max(VehicleConstraints.DESCRIPTION_MAX, t('validation.TOO_LONG'))
      .optional(),
  });

export type DescriptionValues = z.infer<ReturnType<typeof createVehicleDescriptionSchema>>;
