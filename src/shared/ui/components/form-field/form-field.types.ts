import type { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

export interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  hint?: string;
  required?: boolean;
  render: (field: ControllerRenderProps<T, Path<T>>) => React.ReactNode;
}
