import { z } from 'zod';

import { REMINDER_TYPES } from '@entities/reminder';

import type { TFunction } from 'i18next';

export const createReminderSchema = (t: TFunction, currentMileage?: number) =>
  z.object({
    type: z.enum(REMINDER_TYPES, t(`validation.REQUIRED`)),

    title: z.string(t(`validation.REQUIRED`)).min(1, t(`validation.TOO_LONG`)),

    description: z.string().optional(),

    dueDate: z.string().optional(),

    dueMileage: z
      .number()
      .min(currentMileage || 0, t(`validation.TOO_SHORT`))
      .optional(),
  });

export type CreateReminderValues = z.infer<ReturnType<typeof createReminderSchema>>;
