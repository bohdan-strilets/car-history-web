import { Dropdown, DropdownItem } from '@shared/ui/components/dropdown';
import { useState } from 'react';

import type { SelectProps } from './select.types';
import { SelectTrigger } from './SelectTrigger';

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  size,
  state,
  leftIcon,
  fullWidth,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <Dropdown
      disabled={disabled}
      onOpenChange={setOpen}
      fullWidth={fullWidth}
      trigger={
        <SelectTrigger
          leftIcon={leftIcon}
          selected={selected}
          placeholder={placeholder}
          open={open}
          size={size}
          disabled={disabled}
          state={state}
        />
      }
    >
      {options.map((option) => {
        const handleSelect = () => onChange(option.value);
        const isSelected = option.value === value;
        return (
          <DropdownItem
            key={option.id}
            label={option.label}
            disabled={option.disabled}
            onClick={handleSelect}
            selected={isSelected}
          />
        );
      })}
    </Dropdown>
  );
};
