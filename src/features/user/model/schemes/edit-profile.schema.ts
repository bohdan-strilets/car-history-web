import { z } from 'zod';

import { UserConstraints } from '@entities/user';

import type { TFunction } from 'i18next';

export const createEditProfileSchema = (t: TFunction) =>
  z.object({
    firstName: z
      .string(t('validation.REQUIRED'))
      .min(UserConstraints.NAME_MIN, t('validation.TOO_SHORT'))
      .max(UserConstraints.NAME_MAX, t('validation.TOO_LONG')),
    lastName: z
      .string(t('validation.REQUIRED'))
      .min(UserConstraints.NAME_MIN, t('validation.TOO_SHORT'))
      .max(UserConstraints.NAME_MAX, t('validation.TOO_LONG')),
  });

export type EditProfileValues = z.infer<ReturnType<typeof createEditProfileSchema>>;
