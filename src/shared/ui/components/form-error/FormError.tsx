import { Icon } from '../../primitives/icon';

import { root } from './form-error.css';

interface FormErrorProps {
  message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className={root} role="alert">
      <Icon name="circleAlert" color="danger" />
      <span>{message}</span>
    </div>
  );
};

FormError.displayName = 'FormError';
