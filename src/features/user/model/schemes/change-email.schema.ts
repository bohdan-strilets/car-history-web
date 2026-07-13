import { z } from 'zod';

import { UserConstraints } from '@entities/user';

import type { TFunction } from 'i18next';

export const createChangeEmailSchema = (t: TFunction) =>
  z.object({
    newEmail: z
      .email(t('validation.INVALID_EMAIL'))
      .min(1, t('validation.REQUIRED'))
      .max(UserConstraints.EMAIL_MAX, t('validation.TOO_LONG')),
  });

export type ChangeEmailValues = z.infer<ReturnType<typeof createChangeEmailSchema>>;
