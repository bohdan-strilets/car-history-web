import { useTranslation } from 'react-i18next';

import { Button, Icon, Stack, Text } from '@shared/ui';

import { body, header, modal, root } from '../modal.css';

import type { BaseModalProps } from '../model';

export const BaseModal = ({
  title,
  closable = true,
  hasBack = false,
  onClose,
  onBack,
  children,
}: BaseModalProps) => {
  const { t } = useTranslation();

  return (
    <div className={root({ centered: true })}>
      <div className={modal({ centered: true })} role="dialog" aria-modal="true" aria-label={title}>
        <div className={header}>
          <Stack direction="row" align="center" gap="xs">
            {hasBack && (
              <Button
                onClick={onBack}
                size="sm"
                variant="ghost"
                iconOnly
                aria-label={t('common.actions.back')}
              >
                <Icon name="arrowLeft" size="md" />
              </Button>
            )}
            {title && (
              <Text size="lg" weight="semibold" color="primary">
                {title}
              </Text>
            )}
          </Stack>

          {closable && (
            <Button
              onClick={onClose}
              size="sm"
              variant="ghost"
              iconOnly
              aria-label={t('common.actions.close')}
            >
              <Icon name="close" size="md" />
            </Button>
          )}
        </div>

        <div className={body}>{children}</div>
      </div>
    </div>
  );
};
