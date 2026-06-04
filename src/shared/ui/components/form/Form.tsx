import { Button, Stack } from '@shared/ui';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

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
  onBack,
  onSkip,
  className,
}: FormProps) => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className={clsx(root, className)} onSubmit={handleSubmit}>
      {children}

      {error && <FormError message={error} />}

      <Stack direction="row" gap="md">
        {onBack && (
          <Button
            type="button"
            variant="soft"
            color="gray"
            size={{ mobile: 'lg', tablet: 'xl' }}
            onClick={onBack}
            style={{ width: '39%' }}
          >
            {t('common.actions.back')}
          </Button>
        )}

        <Button
          type="submit"
          variant="solid"
          color="accent"
          size={{ mobile: 'lg', tablet: 'xl' }}
          loading={isLoading}
          leftIcon={submitIcon}
          fullWidth={!onBack}
          style={{ width: onBack ? '59%' : '100%' }}
        >
          {submitLabel}
        </Button>
      </Stack>

      {onSkip && (
        <Button
          type="button"
          variant="ghost"
          color="gray"
          size={{ mobile: 'md', tablet: 'lg' }}
          onClick={onSkip}
          fullWidth
        >
          {t('common.actions.skip')}
        </Button>
      )}
    </form>
  );
};

Form.displayName = 'Form';
