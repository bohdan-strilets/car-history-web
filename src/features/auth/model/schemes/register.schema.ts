import { z } from 'zod';

import { UserConstraints } from '@entities/user';

import type { TFunction } from 'i18next';

export const createRegisterSchema = (t: TFunction) =>
  z
    .object({
      firstName: z
        .string(t('validation.REQUIRED'))
        .min(UserConstraints.NAME_MIN, t('validation.TOO_SHORT'))
        .max(UserConstraints.NAME_MAX, t('validation.TOO_LONG')),
      lastName: z
        .string(t('validation.REQUIRED'))
        .min(UserConstraints.NAME_MIN, t('validation.TOO_SHORT'))
        .max(UserConstraints.NAME_MAX, t('validation.TOO_LONG')),
      email: z
        .email(t('validation.INVALID_EMAIL'))
        .min(1, t('validation.REQUIRED'))
        .max(UserConstraints.EMAIL_MAX, t('validation.TOO_LONG')),
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

export type RegisterValues = z.infer<ReturnType<typeof createRegisterSchema>>;
