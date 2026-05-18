import { Box, Stack, Surface } from '@shared/ui/primitives';
import clsx from 'clsx';

import { root } from './panel.css';
import type { PanelOwnProps } from './panel.types';

export const Panel = ({
  as = 'div',
  children,
  className,
  p = 'xl',
  px,
  py,
  width,
  height,
  overflow,
  position,
  variant = 'neuRaised',
  soft,
  solid,
  gradient,
  border,
  shadow,
  radius = 'lg',
  direction = 'column',
  gap = 'md',
  align,
  justify,
  wrap,
  inline,
  hoverable,
  onClick,
  disabled,
  ...rest
}: PanelOwnProps) => {
  return (
    <Surface
      as={onClick ? 'button' : as}
      variant={variant}
      soft={soft}
      solid={solid}
      gradient={gradient}
      border={border}
      shadow={shadow}
      radius={radius}
      className={clsx(root({ hoverable, disabled }), className)}
      onClick={onClick}
      {...rest}
    >
      <Box
        p={p}
        px={px}
        py={py}
        width={width}
        height={height}
        overflow={overflow}
        position={position}
      >
        <Stack
          direction={direction}
          gap={gap}
          align={align}
          justify={justify}
          wrap={wrap}
          inline={inline}
        >
          {children}
        </Stack>
      </Box>
    </Surface>
  );
};
