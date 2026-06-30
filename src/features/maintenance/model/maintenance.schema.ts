import { z } from 'zod';

import { MAINTENANCE_TYPE } from '@entities/maintenance';

import type { TFunction } from 'i18next';

export const createMaintenanceIntervalSchema = (t: TFunction) =>
  z.object({
    type: z.enum(MAINTENANCE_TYPE, t('validation.REQUIRED')),

    title: z.string(t('validation.REQUIRED')).min(1, t('validation.TOO_SHORT')),

    intervalKm: z
      .number(t('validation.MUST_BE_INTEGER'))
      .positive(t('validation.MUST_BE_POSITIVE'))
      .optional(),

    intervalMonths: z
      .number(t('validation.MUST_BE_INTEGER'))
      .positive(t('validation.MUST_BE_POSITIVE'))
      .optional(),

    lastServiceMileage: z
      .number(t('validation.MUST_BE_INTEGER'))
      .min(0, t('validation.MUST_BE_POSITIVE'))
      .optional(),

    lastServiceDate: z.string().optional(),
  });

export type CreateMaintenanceIntervalValues = z.infer<
  ReturnType<typeof createMaintenanceIntervalSchema>
>;
