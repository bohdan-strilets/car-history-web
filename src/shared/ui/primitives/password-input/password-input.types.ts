import type { InputProps } from '../input';

export type PasswordInputProps = Omit<InputProps, 'type' | 'rightElement' | 'rightIcon'>;
