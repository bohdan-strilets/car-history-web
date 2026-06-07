import { UserConstraints } from '@entities/user';
import type { TFunction } from 'i18next';
import { z } from 'zod';

export const createForgotPasswordSchema = (t: TFunction) =>
  z.object({
    email: z
      .email(t('validation.INVALID_EMAIL'))
      .min(1, t('validation.REQUIRED'))
      .max(UserConstraints.EMAIL_MAX, t('validation.TOO_LONG')),
  });

export type ForgotPasswordValues = z.infer<ReturnType<typeof createForgotPasswordSchema>>;
