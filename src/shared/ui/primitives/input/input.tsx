import { resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { Icon } from '../icon';

import { iconSlot, nativeInput, responsiveStyles, root } from './input.css';
import type { InputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, state, leftIcon, rightIcon, rightElement, className, disabled, ...rest }, ref) => {
    const resolvedState = disabled ? 'disabled' : (state ?? 'default');

    const rootClass = root({
      size: typeof size === 'string' ? size : size?.mobile,
      state: resolvedState,
    });

    const iconClass = iconSlot({
      size: typeof size === 'string' ? size : size?.mobile,
    });

    const responsiveClasses = [
      ...resolveResponsive(responsiveStyles.sizeHeight, size),
      ...resolveResponsive(responsiveStyles.sizePaddingInline, size),
      ...resolveResponsive(responsiveStyles.sizeFontSize, size),
    ];

    return (
      <div className={clsx(rootClass, ...responsiveClasses, className)}>
        {leftIcon && <Icon name={leftIcon} className={iconClass} />}

        <input ref={ref} className={nativeInput()} disabled={disabled} {...rest} />

        {rightIcon && !rightElement && <Icon name={rightIcon} className={iconClass} />}
        {rightElement && <span className={iconClass}>{rightElement}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
