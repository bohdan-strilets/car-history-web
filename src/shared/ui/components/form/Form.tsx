import { Button } from '@shared/ui';
import { clsx } from 'clsx';

import { FormError } from '../form-error';

import { root } from './form.css';
import type { FormProps } from './form.types';

export const Form = ({
  children,
  onSubmit,
  isLoading,
  error,
  submitLabel,
  submitIcon,
  className,
}: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className={clsx(root, className)} onSubmit={handleSubmit}>
      {children}

      {error && <FormError message={error} />}

      <Button
        type="submit"
        variant="solid"
        color="accent"
        size={{ mobile: 'lg', tablet: 'xl' }}
        loading={isLoading}
        leftIcon={submitIcon}
        fullWidth
      >
        {submitLabel}
      </Button>
    </form>
  );
};

Form.displayName = 'Form';
