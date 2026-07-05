import { z } from 'zod';

import { TIRE_TYPE } from '@entities/tire';

import type { TFunction } from 'i18next';

export const createTireSchema = (t: TFunction) =>
  z.object({
    brand: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
    model: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
    type: z.enum(TIRE_TYPE, t('validation.REQUIRED')),
    width: z
      .number(t('validation.REQUIRED'))
      .min(100, t('validation.TOO_SMALL'))
      .max(400, t('validation.TOO_LARGE')),
    aspectRatio: z
      .number(t('validation.REQUIRED'))
      .min(20, t('validation.TOO_SMALL'))
      .max(90, t('validation.TOO_LARGE')),
    rimDiameter: z
      .number(t('validation.REQUIRED'))
      .min(10, t('validation.TOO_SMALL'))
      .max(24, t('validation.TOO_LARGE')),
    price: z.number().min(0, t('validation.MUST_BE_POSITIVE')).optional(),
    storageLocation: z.string().optional(),
    mileageAtPurchase: z.number().min(0, t('validation.MUST_BE_POSITIVE')).optional(),
    quantity: z.number().min(1).max(10).optional(),
    purchaseAt: z.string().optional(),
  });

export type CreateTireValues = z.infer<ReturnType<typeof createTireSchema>>;
