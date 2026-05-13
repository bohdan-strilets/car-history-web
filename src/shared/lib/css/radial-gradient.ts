type Shape = 'ellipse' | 'circle';

interface RadialGradient {
  shape?: Shape;
  color1: string;
  position1?: string;
  stop1?: string;
  color2?: string;
  position2?: string;
  stop2?: string;
}

export const radialGradient = ({
  shape = 'ellipse',
  color1,
  position1 = '30% 50%',
  stop1 = '0%',
  color2 = 'transparent',
  position2 = '30% 50%',
  stop2 = '60%',
}: RadialGradient): string => {
  return `radial-gradient(${shape} at ${position1}, ${color1} ${stop1}, ${position2} ${color2} ${stop2})`;
};
