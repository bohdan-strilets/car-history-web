import { forwardRef } from 'react';

import { clsx } from 'clsx';

import { Icon } from '../icon';

import { nativeInput } from './input.css';
import { useInputClasses } from './input.utils';

import type { InputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, state, leftIcon, rightIcon, rightElement, className, disabled, ...rest }, ref) => {
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!(rightIcon || rightElement);

    const { rootClass, iconClass, responsiveClasses } = useInputClasses({
      size,
      state,
      disabled,
      hasLeftIcon,
      hasRightIcon,
    });

    return (
      <div className={clsx(rootClass, ...responsiveClasses, className)}>
        {leftIcon && <Icon name={leftIcon} className={iconClass} />}

        <input
          ref={ref}
          className={nativeInput({ hasLeftIcon, hasRightIcon })}
          disabled={disabled}
          {...rest}
        />

        {rightIcon && !rightElement && <Icon name={rightIcon} className={iconClass} />}
        {rightElement && <span className={iconClass}>{rightElement}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
