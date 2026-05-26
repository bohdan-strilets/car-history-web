import { useDismiss } from '@shared/hooks';
import { Box } from '@shared/ui/primitives';
import { Portal } from '@shared/ui/primitives/portal';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

import { content, root } from './dropdown.css';
import type { DropdownProps } from './dropdown.types';
import { useDropdown } from './use-dropdown';

export const Dropdown = ({
  trigger,
  children,
  align = 'start',
  direction = 'bottom',
  disabled,
  fullWidth,
  open: controlledOpen,
  onOpenChange,
  className,
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const portalRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  const { rootRef, getPortalStyle } = useDropdown({ open, align, direction, fullWidth });

  useDismiss({
    enabled: open,
    onDismiss: () => setOpen(false),
    ref: rootRef,
    portalRef,
  });

  const handleTriggerClick = () => {
    if (!disabled) setOpen(!open);
  };

  return (
    <div className={clsx(root({ fullWidth }), className)} ref={rootRef}>
      <Box onClick={handleTriggerClick} width={fullWidth ? 'full' : 'auto'}>
        {trigger}
      </Box>

      {open && (
        <Portal>
          <div
            ref={portalRef}
            style={getPortalStyle()}
            className={content({ fullWidth: fullWidth && direction === 'bottom' })}
            role="menu"
          >
            {children}
          </div>
        </Portal>
      )}
    </div>
  );
};
