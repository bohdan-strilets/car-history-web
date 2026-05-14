import { UserConstraints } from '@entities/user';
import type { TFunction } from 'i18next';
import { z } from 'zod';

export const createLoginSchema = (t: TFunction) =>
  z.object({
    email: z
      .email(t('validation.INVALID_EMAIL'))
      .min(1, t('validation.REQUIRED'))
      .max(UserConstraints.EMAIL_MAX, t('validation.TOO_LONG')),
    password: z
      .string(t('validation.REQUIRED'))
      .min(UserConstraints.PASSWORD_MIN, t('validation.TOO_SHORT'))
      .max(UserConstraints.PASSWORD_MAX, t('validation.TOO_LONG')),
  });

export type LoginValues = z.infer<ReturnType<typeof createLoginSchema>>;
