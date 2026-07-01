import { z } from 'zod';

import type { TFunction } from 'i18next';

export const markMaintenanceDoneSchema = (t: TFunction) =>
  z.object({
    mileage: z.number(t('validation.MUST_BE_INTEGER')).min(0, t('validation.MUST_BE_POSITIVE')),

    date: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
  });

export type MarkMaintenanceDoneValues = z.infer<ReturnType<typeof markMaintenanceDoneSchema>>;
