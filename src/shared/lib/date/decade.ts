const DECADE_SIZE = 10;

export const getDecadeStart = (year: number): number => {
  return Math.floor(year / DECADE_SIZE) * DECADE_SIZE;
};

export const getDecadeYears = (decadeStart: number): number[] => {
  return Array.from({ length: DECADE_SIZE }, (_, i) => decadeStart + i);
};
