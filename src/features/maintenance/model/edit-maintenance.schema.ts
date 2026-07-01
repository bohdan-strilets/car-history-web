import z from 'zod';

import type { TFunction } from 'i18next';

export const editMaintenanceIntervalSchema = (t: TFunction) =>
  z.object({
    title: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
    intervalKm: z
      .number(t('validation.MUST_BE_INTEGER'))
      .min(1, t('validation.MUST_BE_POSITIVE'))
      .optional(),
    intervalMonths: z
      .number(t('validation.MUST_BE_INTEGER'))
      .min(1, t('validation.MUST_BE_POSITIVE'))
      .optional(),
    lastServiceMileage: z
      .number(t('validation.MUST_BE_INTEGER'))
      .min(0, t('validation.MUST_BE_POSITIVE'))
      .optional(),
    lastServiceDate: z.string().optional(),
  });

export type EditMaintenanceIntervalValues = z.infer<
  ReturnType<typeof editMaintenanceIntervalSchema>
>;
