import { z } from 'zod';

import { UserConstraints } from '@entities/user';

import type { TFunction } from 'i18next';

export const createChangePasswordSchema = (t: TFunction) =>
  z
    .object({
      currentPassword: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
      newPassword: z
        .string(t('validation.REQUIRED'))
        .min(UserConstraints.PASSWORD_MIN, t('validation.TOO_SHORT'))
        .max(UserConstraints.PASSWORD_MAX, t('validation.TOO_LONG')),
      confirmPassword: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t('validation.MUST_MATCH'),
      path: ['confirmPassword'],
    });

export type ChangePasswordValues = z.infer<ReturnType<typeof createChangePasswordSchema>>;
