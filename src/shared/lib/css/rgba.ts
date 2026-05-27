export const rgba = (rgb: string, alpha: number = 1): string => {
  const [r, g, b] = rgb.match(/\d+/g)?.map(Number) || [0, 0, 0];
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
