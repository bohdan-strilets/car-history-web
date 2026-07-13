import { z } from 'zod';

import type { TFunction } from 'i18next';

export const createDeleteAccountSchema = (t: TFunction) =>
  z.object({
    password: z.string(t('validation.REQUIRED')).min(1, t('validation.REQUIRED')),
  });

export type DeleteAccountValues = z.infer<ReturnType<typeof createDeleteAccountSchema>>;
