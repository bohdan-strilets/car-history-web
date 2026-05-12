import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { Icon } from '@shared/ui/primitives/icon';
import { clsx } from 'clsx';

import { Spinner } from '../spinner';

import { responsiveStyles, root } from './button.css';
import type { ButtonProps } from './button.types';

export const Button = ({
  children,
  className,
  variant,
  color,
  size,
  radius,
  fullWidth,
  iconOnly,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  strokeWidth,
  ...rest
}: ButtonProps) => {
  const baseSize = baseToken(size);
  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);
  const iconSize = baseSize === 'sm' ? 'sm' : 'md';

  return (
    <button
      className={clsx(
        root({ variant, color, size: baseSize, radius, fullWidth, iconOnly }),
        ...responsiveClasses,
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading ? (
        <Spinner size="xs" />
      ) : (
        <>
          {leftIcon && (
            <Icon
              name={leftIcon}
              size={iconSize}
              strokeWidth={strokeWidth}
              color="inherit"
              aria-hidden
            />
          )}
          {children}
          {rightIcon && (
            <Icon
              name={rightIcon}
              size={iconSize}
              strokeWidth={strokeWidth}
              color="inherit"
              aria-hidden
            />
          )}
        </>
      )}
    </button>
  );
};
