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
  open: controlledOpen,
  onOpenChange,
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  useDismiss({
    enabled: open,
    onDismiss: () => setOpen(false),
    ref: rootRef,
  });

  const handleTriggerClick = () => {
    if (!disabled) setOpen(!open);
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
