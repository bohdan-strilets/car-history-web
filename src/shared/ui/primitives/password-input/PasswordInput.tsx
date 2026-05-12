import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon } from '../icon';
import { Input } from '../input';

import type { PasswordInputProps } from './password-input.types';

export const PasswordInput = ({ ...rest }: PasswordInputProps) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  return (
    <Input
      {...rest}
      type={visible ? 'text' : 'password'}
      rightElement={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? t('common.hidePassword') : t('common.showPassword')}
        >
          <Icon name={visible ? 'eyeOff' : 'eye'} color="tertiary" />
        </button>
      }
    />
  );
};

PasswordInput.displayName = 'PasswordInput';
