import { clsx } from 'clsx';

import { baseToken, resolveResponsive } from '@shared/lib';
import { Icon } from '@shared/ui';

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
  weight,
  ...rest
}: ButtonProps) => {
  const baseSize = baseToken(size);
  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);
  const iconSize = baseSize === 'sm' ? 'sm' : 'md';

  const spinnerColor = variant === 'solid' ? 'onColor' : color;

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
        <>
          <Spinner size="xs" color={spinnerColor} />
          {children}
        </>
      ) : (
        <>
          {leftIcon && (
            <Icon name={leftIcon} size={iconSize} weight={weight} color="inherit" aria-hidden />
          )}
          {children}
          {rightIcon && (
            <Icon name={rightIcon} size={iconSize} weight={weight} color="inherit" aria-hidden />
          )}
        </>
      )}
    </button>
  );
};

Button.displayName = 'Button';
