import type { Language } from '@entities/user';
import type { DateFormat } from '@entities/workspace';

export const formatDate = (
  date: string | Date,
  dateFormat: DateFormat = 'DD_MM_YYYY',
  language: Language,
): string => {
  const d = new Date(date);

  switch (dateFormat) {
    case 'DD_MM_YYYY':
      return new Intl.DateTimeFormat(language, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(d);

    case 'YYYY_MM_DD':
      return new Intl.DateTimeFormat(language, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(d);

    case 'DD_MONTH_YYYY':
      return new Intl.DateTimeFormat(language, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(d);
  }
};
