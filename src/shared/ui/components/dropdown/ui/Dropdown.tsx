import { useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';

import { useDismiss } from '@shared/hooks';
import { Portal } from '@shared/ui';

import { useDropdown, useDropdownKeyboard, type DropdownProps } from '../modal';

import { content, root, triggerWrapper } from './dropdown.css';

export const Dropdown = ({
  trigger,
  children,
  align = 'start',
  direction = 'bottom',
  disabled,
  fullWidth,
  open: controlledOpen,
  onOpenChange,
  minWidth = '200px',
  maxHeight = '300px',
  className,
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [shouldFocus, setShouldFocus] = useState<'first' | 'last' | null>(null);
  const [hasFocusableTrigger, setHasFocusableTrigger] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const innerTriggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  const handleClose = () => {
    setOpen(false);
    const focusable = innerTriggerRef.current?.querySelector<HTMLElement>(
      'input, button, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    (focusable ?? innerTriggerRef.current)?.focus();
  };

  useEffect(() => {
    if (!innerTriggerRef.current) return;
    const focusable = !!innerTriggerRef.current.querySelector<HTMLElement>(
      'input, button, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    setHasFocusableTrigger(focusable);
  }, [trigger]);

  const { rootRef, getPortalStyle } = useDropdown({
    open,
    align,
    direction,
    fullWidth,
    menuRef,
  });

  const { handleMenuKeyDown } = useDropdownKeyboard({
    open,
    onClose: handleClose,
  });

  useEffect(() => {
    if (!open || !shouldFocus || !menuRef.current) return;

    const items = menuRef.current.querySelectorAll<HTMLElement>(
      '[role="menuitem"]:not([disabled]):not([aria-disabled="true"])',
    );

    if (shouldFocus === 'first') items[0]?.focus();
    if (shouldFocus === 'last') items[items.length - 1]?.focus();

    setShouldFocus(null);
  }, [open, shouldFocus]);

  const handleWrapperKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(true);
        setShouldFocus('first');
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setOpen(true);
        setShouldFocus('last');
      }
    }
  };

  const portalStyle = getPortalStyle();

  useDismiss({
    enabled: open,
    onDismiss: handleClose,
    ref: rootRef,
    portalRef: menuRef,
  });

  return (
    <div
      ref={rootRef}
      className={clsx(root({ fullWidth }), className)}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      <div
        ref={innerTriggerRef}
        onClick={() => {
          if (!disabled) setOpen(!open);
        }}
        onKeyDown={hasFocusableTrigger ? undefined : handleWrapperKeyDown}
        onKeyDownCapture={hasFocusableTrigger ? handleWrapperKeyDown : undefined}
        aria-expanded={open}
        aria-haspopup="menu"
        tabIndex={disabled ? -1 : hasFocusableTrigger ? -1 : 0}
        style={{ width: fullWidth ? '100%' : undefined }}
        className={triggerWrapper}
      >
        {trigger}
      </div>

      {open && (
        <Portal>
          <div
            ref={menuRef}
            style={{
              ...portalStyle,
              minWidth,
              maxHeight,
            }}
            className={content({ fullWidth: fullWidth && direction === 'bottom' })}
            role="menu"
            aria-orientation="vertical"
            onKeyDown={handleMenuKeyDown}
          >
            {children}
          </div>
        </Portal>
      )}
    </div>
  );
};
