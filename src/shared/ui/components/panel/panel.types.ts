import type { BoxOwnProps, StackProps, SurfaceOwnProps } from '@shared/ui';
import type { ElementType } from 'react';

type BoxWithoutRadius = Omit<BoxOwnProps, 'radius'>;

export interface PanelOwnProps extends BoxWithoutRadius, SurfaceOwnProps {
  direction?: StackProps<'div'>['direction'];
  gap?: StackProps<'div'>['gap'];
  align?: StackProps<'div'>['align'];
  justify?: StackProps<'div'>['justify'];
  wrap?: StackProps<'div'>['wrap'];
  inline?: StackProps<'div'>['inline'];
  children?: React.ReactNode;
  className?: string;
  as?: ElementType;
  hoverable?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
