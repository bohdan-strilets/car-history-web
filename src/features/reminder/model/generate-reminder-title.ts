import type { ReminderTitleContext } from './types';
import type { TFunction } from 'i18next';

export const generateReminderTitle = (t: TFunction, ctx: ReminderTitleContext): string => {
  if (!ctx.type) return '';

  const base = t(`enums.reminderType.${ctx.type}`);
  const parts = [base];

  if (ctx.dueDate) {
    const date = new Date(ctx.dueDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    parts.push(`· do ${day}.${month}.${year}`);
  }

  if (ctx.dueMileage != null && !isNaN(ctx.dueMileage)) {
    parts.push(`· ${ctx.dueMileage} km`);
  }

  return parts.join(' ');
};
