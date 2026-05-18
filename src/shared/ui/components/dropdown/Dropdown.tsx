import { useDismiss } from '@shared/hooks';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

import { content, root } from './dropdown.css';
import type { BaseDropdownProps } from './dropdown.types';

export const Dropdown = ({ trigger, children, align = 'start', disabled }: BaseDropdownProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useDismiss({
    enabled: open,
    onDismiss: () => setOpen(false),
    ref: rootRef,
  });

  const handleTriggerClick = () => {
    if (!disabled) setOpen((prev) => !prev);
  };

  return (
    <div className={root} ref={rootRef}>
      <div onClick={handleTriggerClick}>{trigger}</div>

      {open && (
        <div className={clsx(content({ align }))} role="menu">
          {children}
        </div>
      )}
    </div>
  );
};
