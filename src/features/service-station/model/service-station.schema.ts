import { z } from 'zod';

import { SERVICE_STATION_TYPE } from '@entities/service-station';

import type { TFunction } from 'i18next';

export const createServiceStationSchema = (t: TFunction) =>
  z.object({
    name: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
    type: z.enum(SERVICE_STATION_TYPE, t('validation.REQUIRED')),
    address: z.object({
      country: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
      city: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
      street: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
      number: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
      postCode: z.string().optional(),
    }),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    phone: z.string().optional(),
    website: z.string().optional(),
    notes: z.string().optional(),
    googlePlaceId: z.string().optional(),
    googleRating: z.number().optional(),
  });

export type CreateServiceStationValues = z.infer<ReturnType<typeof createServiceStationSchema>>;
