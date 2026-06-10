import { formatDate } from '@shared/lib';
import { Input } from '@shared/ui';

import { type DatePickerTriggerProps } from '../model';

export const DatePickerTrigger = ({
  value,
  placeholder,
  disabled,
  size,
  state,
}: DatePickerTriggerProps) => {
  return (
    <Input
      value={value ? formatDate(value, 'DD_MM_YYYY', 'PL') : ''}
      onChange={() => {}}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      state={state}
      rightIcon="calendar"
      readOnly
    />
  );
};
