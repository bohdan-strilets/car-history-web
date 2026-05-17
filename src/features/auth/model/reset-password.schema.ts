import { UserConstraints } from '@entities/user';
import type { TFunction } from 'i18next';
import { z } from 'zod';

export const createResetPasswordSchema = (t: TFunction) =>
  z
    .object({
      password: z
        .string(t('validation.REQUIRED'))
        .min(UserConstraints.PASSWORD_MIN, t('validation.TOO_SHORT'))
        .max(UserConstraints.PASSWORD_MAX, t('validation.TOO_LONG')),
      confirmPassword: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t('validation.MUST_MATCH'),
      path: ['confirmPassword'],
    });

export type ResetPasswordValues = z.infer<ReturnType<typeof createResetPasswordSchema>>;
