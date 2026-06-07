import { z } from 'zod';

import { CURRENCY, DATE_FORMAT, DISTANCE_UNIT, FUEL_UNIT } from '@entities/workspace';

import type { TFunction } from 'i18next';

export const createWorkspaceSettingsSchema = (t: TFunction) =>
  z.object({
    currency: z.enum(CURRENCY, t('validation.REQUIRED')),
    timezone: z.string().min(1, t('validation.REQUIRED')),
    distanceUnit: z.enum(DISTANCE_UNIT, t('validation.REQUIRED')),
    fuelUnit: z.enum(FUEL_UNIT, t('validation.REQUIRED')),
    dateFormat: z.enum(DATE_FORMAT, t('validation.REQUIRED')),
  });

export type WorkspaceSettingsValues = z.infer<ReturnType<typeof createWorkspaceSettingsSchema>>;
