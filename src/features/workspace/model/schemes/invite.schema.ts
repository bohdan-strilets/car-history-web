import { z } from 'zod';

import { UserConstraints } from '@entities/user';
import { WORKSPACE_MEMBER_ROLE } from '@entities/workspace';

import type { TFunction } from 'i18next';

export const createInviteSchema = (t: TFunction) =>
  z.object({
    email: z
      .email(t('validation.INVALID_EMAIL'))
      .min(1, t('validation.REQUIRED'))
      .max(UserConstraints.EMAIL_MAX, t('validation.TOO_LONG')),
    role: z.enum(WORKSPACE_MEMBER_ROLE, t('validation.REQUIRED')),
  });

export type InviteValues = z.infer<ReturnType<typeof createInviteSchema>>;
