import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { Icon } from '../icon';

import { nativeInput } from './input.css';
import type { InputProps } from './input.types';
import { useInputClasses } from './input.utils';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, state, leftIcon, rightIcon, rightElement, className, disabled, ...rest }, ref) => {
    const { rootClass, iconClass, responsiveClasses } = useInputClasses({ size, state, disabled });

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
