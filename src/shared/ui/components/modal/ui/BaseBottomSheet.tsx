import { useTranslation } from 'react-i18next';

import { Button, Icon, Stack, Text } from '@shared/ui';

import { body, handle, handleBar, header, modal, root } from '../modal.css';

import type { BaseBottomSheetProps } from '../model';

export const BaseBottomSheet = ({
  title,
  closable = true,
  hasBack = false,
  onClose,
  onBack,
  children,
  zIndex,
}: BaseBottomSheetProps) => {
  const { t } = useTranslation();

  return (
    <div className={root({ bottom: true })} style={{ zIndex }}>
      <div className={modal({ bottom: true })} role="dialog" aria-modal="true" aria-label={title}>
        <div className={handle}>
          <div className={handleBar} />
        </div>

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
            <Text size="lg" weight="semibold" color="primary">
              {title}
            </Text>
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
