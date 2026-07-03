import type { Language } from '@entities/user';
import type { DateFormat } from '@entities/workspace';

const pad = (value: number): string => String(value).padStart(2, '0');

export const formatDate = (
  date: string | Date,
  dateFormat: DateFormat = 'DD_MM_YYYY',
  language: Language,
): string => {
  const d = new Date(date);

  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();

  switch (dateFormat) {
    case 'DD_MM_YYYY':
      return `${day}.${month}.${year}`;

    case 'YYYY_MM_DD':
      return `${year}.${month}.${day}`;

    case 'DD_MONTH_YYYY':
      return new Intl.DateTimeFormat(language, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(d);

    default:
      return `${day}.${month}.${year}`;
  }
};
