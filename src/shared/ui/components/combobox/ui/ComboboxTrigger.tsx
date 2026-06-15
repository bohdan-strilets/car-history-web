import { Chevron, Input } from '@shared/ui';

import type { ComboboxTriggerProps } from '../model';

export const ComboboxTrigger = ({
  disabled,
  size,
  state,
  leftIcon,
  open,
  query,
  handleInputChange,
  handleFocus,
  placeholder,
  displayValue,
}: ComboboxTriggerProps) => {
  return (
    <Input
      value={open ? query : displayValue}
      onChange={open ? handleInputChange : () => {}}
      onFocus={handleFocus}
      onClick={(e) => e.stopPropagation()}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      state={state}
      leftIcon={leftIcon}
      rightElement={<Chevron open={open} />}
    />
  );
};
