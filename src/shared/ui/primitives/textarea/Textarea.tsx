import { mergeRefs } from '@shared/utils';
import { clsx } from 'clsx';
import { forwardRef, useCallback } from 'react';

import { nativeTextarea, root } from './textarea.css';
import type { TextareaProps } from './textarea.types';
import { useAutoResize } from './use-auto-resize';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, resize, state, className, disabled, maxRows, rows = 3, onChange, ...rest }, ref) => {
    const resolvedState = disabled ? 'disabled' : (state ?? 'default');

    const { ref: autoResizeRef, adjust } = useAutoResize({ maxRows, value: rest.value });

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        adjust();
        onChange?.(e);
      },
      [adjust, onChange],
    );

    return (
      <div className={clsx(root({ size, resize, state: resolvedState }), className)}>
        <textarea
          ref={mergeRefs(ref, autoResizeRef)}
          className={nativeTextarea({})}
          disabled={disabled}
          rows={rows}
          onChange={handleChange}
          {...rest}
        />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
