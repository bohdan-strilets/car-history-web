import type { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

import type { FieldDirection } from '@shared/ui';

export interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  hint?: string;
  required?: boolean;
  fullWidth?: boolean;
  render: (field: ControllerRenderProps<T, Path<T>>) => React.ReactNode;
  direction?: FieldDirection;
}
