import { WORKSPACE_MEMBER_ROLE } from '@entities/workspace';
import type { TFunction } from 'i18next';
import z from 'zod';

export const createEditMemberRoleSchema = (t: TFunction) =>
  z.object({
    role: z.enum(WORKSPACE_MEMBER_ROLE, t('validation.REQUIRED')),
  });

export type EditMemberRoleValues = z.infer<ReturnType<typeof createEditMemberRoleSchema>>;
