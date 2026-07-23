import { forwardRef, useEffect, useRef } from 'react';

import { clsx } from 'clsx';

import { mergeRefs } from '@shared/utils';

import { Icon } from '../icon';

import { iconSlot, labelText, nativeInput, root, wrapper } from './checkbox.css';

import type { CheckboxProps } from './checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size, state, indeterminate = false, className, disabled, checked, label, ...rest }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const resolvedState = disabled ? 'disabled' : (state ?? 'default');

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const box = (
      <span className={clsx(root({ size, state: resolvedState }), !label && className)}>
        <input
          ref={mergeRefs(ref, innerRef)}
          className={nativeInput}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          {...rest}
        />

        {(checked || indeterminate) && (
          <span className={iconSlot}>
            <Icon name={indeterminate ? 'minus' : 'check'} weight="bold" color="onColor" />
          </span>
        )}
      </span>
    );

    if (!label) return box;

    return (
      <label className={clsx(wrapper, className)}>
        {box}
        <span className={labelText({ size })}>{label}</span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
