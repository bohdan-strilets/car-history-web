export const parsePlate = (raw: string): [string, string] => {
  const cleaned = raw.trim().toUpperCase().replace(/[\s-]/g, '');
  const match = cleaned.match(/^([A-Z]{2,3})([A-Z0-9]{1,6})$/);

  if (match) return [match[1], match[2]];

  const mid = Math.ceil(cleaned.length / 2);

  return [cleaned.slice(0, mid), cleaned.slice(mid)];
};
