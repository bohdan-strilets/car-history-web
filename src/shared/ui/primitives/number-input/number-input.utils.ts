import type { NumberInputFormat } from './number-input.types';

export const formatValue = (value: number, format: NumberInputFormat): string => {
  if (format === 'mileage') {
    return value.toLocaleString('pl-PL').replace(/\./g, ' ');
  }
  return String(value);
};

export const parseRaw = (raw: string, format: NumberInputFormat): number | undefined => {
  const cleaned = format === 'mileage' ? raw.replace(/\s/g, '') : raw.replace(',', '.');

  if (cleaned === '') return undefined;

  const isValid = format === 'decimal' ? /^-?\d*\.?\d*$/.test(cleaned) : /^\d+$/.test(cleaned);

  if (!isValid) return undefined;

  const num = format === 'decimal' ? parseFloat(cleaned) : parseInt(cleaned, 10);
  return isNaN(num) ? undefined : num;
};
