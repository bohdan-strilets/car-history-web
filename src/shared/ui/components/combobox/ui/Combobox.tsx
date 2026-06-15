import { Dropdown, DropdownItem } from '@shared/ui';

import { useCombobox, type ComboboxProps } from '../model';
import { ComboboxTrigger, EmptyMessage } from '../ui';

export const Combobox = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  emptyMessage,
  fullWidth,
  leftIcon,
  size,
  state,
  allowCustomValue = false,
}: ComboboxProps) => {
  const {
    query,
    open,
    displayValue,
    filtered,
    isEmpty,
    handleInputChange,
    handleFocus,
    handleSelect,
    handleOpenChange,
  } = useCombobox({ options, value, onChange, allowCustomValue });

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpenChange}
      fullWidth={fullWidth ?? true}
      disabled={disabled}
      trigger={
        <ComboboxTrigger
          disabled={disabled}
          size={size}
          state={state}
          leftIcon={leftIcon}
          open={open}
          query={query}
          displayValue={displayValue}
          handleInputChange={handleInputChange}
          handleFocus={handleFocus}
          placeholder={placeholder}
        />
      }
    >
      <>
        {isEmpty ? (
          <EmptyMessage emptyMessage={emptyMessage} />
        ) : (
          filtered.map((option) => (
            <DropdownItem
              key={option.id}
              label={option.label}
              disabled={option.disabled}
              onClick={() => handleSelect(option.value)}
              selected={option.value === value}
            />
          ))
        )}
      </>
    </Dropdown>
  );
};
