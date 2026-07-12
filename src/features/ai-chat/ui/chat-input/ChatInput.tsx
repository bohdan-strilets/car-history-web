import { useState, type KeyboardEvent } from 'react';

import { useTranslation } from 'react-i18next';

import { Button, Textarea } from '@shared/ui';

import * as styles from './chat-input.css';

import type { ChatInputProps } from './chat-input.types';

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;

    onSend(trimmed);
    setValue('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.textareaWrapper}>
        <Textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('ai.chat.inputPlaceholder')}
          maxRows={6}
          disabled={disabled}
        />
      </div>
      <Button
        iconOnly
        rightIcon="arrowUp"
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        loading={disabled}
      />
    </div>
  );
};
