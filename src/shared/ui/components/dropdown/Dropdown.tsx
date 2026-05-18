import { useDismiss } from '@shared/hooks';
import { Box } from '@shared/ui/primitives';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

import { content, root } from './dropdown.css';
import type { DropdownProps } from './dropdown.types';

export const Dropdown = ({
  trigger,
  children,
  align = 'start',
  disabled,
  fullWidth,
  onOpenChange,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useDismiss({
    enabled: open,
    onDismiss: () => {
      setOpen(false);
      onOpenChange?.(false);
    },
    ref: rootRef,
  });

  const handleTriggerClick = () => {
    if (!disabled) {
      const next = !open;
      setOpen(next);
      onOpenChange?.(next);
    }
  };

  return (
    <div className={root({ fullWidth })} ref={rootRef}>
      <Box onClick={handleTriggerClick} width={fullWidth ? 'full' : 'auto'}>
        {trigger}
      </Box>

      {open && (
        <div className={clsx(content({ align, fullWidth }))} role="menu">
          {children}
        </div>
      )}
    </div>
  );
};
