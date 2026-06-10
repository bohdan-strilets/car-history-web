import { z } from 'zod';

import { TimelineConstraints as C } from '@entities/timeline';

import type { TFunction } from 'i18next';

export const createUpdateTimelineEventSchema = (t: TFunction) =>
  z.object({
    title: z
      .string(t('validation.REQUIRED'))
      .min(C.TITLE_MIN, t('validation.TOO_SHORT'))
      .max(C.TITLE_MAX, t('validation.TOO_LONG'))
      .optional(),

    eventDate: z.string(t('validation.REQUIRED')).optional(),

    mileage: z
      .number(t('validation.REQUIRED'))
      .int(t('validation.MUST_BE_INTEGER'))
      .min(C.MILEAGE_MIN, t('validation.TOO_SMALL'))
      .max(C.MILEAGE_MAX, t('validation.TOO_LARGE'))
      .optional(),

    cost: z
      .number(t('validation.INVALID_FORMAT'))
      .min(C.COST_MIN, t('validation.TOO_SMALL'))
      .optional(),

    description: z.string().max(C.DESCRIPTION_MAX, t('validation.TOO_LONG')).optional(),

    serviceStationId: z.string().optional(),
  });

export type UpdateTimelineEventValues = z.infer<ReturnType<typeof createUpdateTimelineEventSchema>>;
