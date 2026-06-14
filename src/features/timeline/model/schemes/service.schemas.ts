import { z } from 'zod';

import { TimelineConstraints as C } from '@entities/timeline';

import type { TFunction } from 'i18next';

export const workDraftSchema = (t: TFunction) =>
  z.object({
    name: z
      .string(t('validation.REQUIRED'))
      .min(C.WORK_NAME_MIN, t('validation.TOO_SHORT'))
      .max(C.WORK_NAME_MAX, t('validation.TOO_LONG')),

    price: z.number(t('validation.REQUIRED')).min(0, t('validation.TOO_SMALL')),

    description: z.string().max(C.WORK_DESCRIPTION_MAX, t('validation.TOO_LONG')).optional(),
  });

export const partDraftSchema = (t: TFunction) =>
  z.object({
    name: z
      .string(t('validation.REQUIRED'))
      .min(C.PART_NAME_MIN, t('validation.TOO_SHORT'))
      .max(C.PART_NAME_MAX, t('validation.TOO_LONG')),

    price: z.number(t('validation.REQUIRED')).min(0, t('validation.TOO_SMALL')),

    quantity: z
      .number(t('validation.REQUIRED'))
      .int(t('validation.MUST_BE_INTEGER'))
      .min(C.PART_QUANTITY_MIN, t('validation.TOO_SMALL'))
      .max(C.PART_QUANTITY_MAX, t('validation.TOO_LARGE')),

    description: z.string().max(C.PART_DESCRIPTION_MAX, t('validation.TOO_LONG')).optional(),
  });

export type WorkDraftValues = z.infer<ReturnType<typeof workDraftSchema>>;
export type PartDraftValues = z.infer<ReturnType<typeof partDraftSchema>>;
