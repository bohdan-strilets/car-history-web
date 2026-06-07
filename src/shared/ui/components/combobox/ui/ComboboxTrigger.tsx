import { Chevron, Input } from '@shared/ui';

import type { ComboboxTriggerProps } from '../model';

export const ComboboxTrigger = ({
  disabled,
  size,
  state,
  leftIcon,
  open,
  query,
  selected,
  handleInputChange,
  handleFocus,
  placeholder,
}: ComboboxTriggerProps) => {
  return (
    <Input
      value={open ? query : (selected?.label ?? '')}
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
