import { z } from 'zod';

import { WORKSPACE_TYPE, WorkspaceConstraints } from '@entities/workspace';

import type { TFunction } from 'i18next';

export const createWorkspaceSchema = (t: TFunction) =>
  z.object({
    name: z
      .string(t('validation.REQUIRED'))
      .min(WorkspaceConstraints.NAME_MIN, t('validation.TOO_SHORT'))
      .max(WorkspaceConstraints.NAME_MAX, t('validation.TOO_LONG')),
    type: z.enum(WORKSPACE_TYPE, t('validation.REQUIRED')),
  });

export type WorkspaceValues = z.infer<ReturnType<typeof createWorkspaceSchema>>;
