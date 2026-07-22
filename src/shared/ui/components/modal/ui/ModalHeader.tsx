import { useTranslation } from 'react-i18next';

import { Button, Icon, Stack, Text } from '@shared/ui';

import { header } from '../modal.css';

interface ModalHeaderProps {
  title?: string;
  closable: boolean;
  hasBack: boolean;
  onClose: () => void;
  onBack?: () => void;
}

export const ModalHeader = ({ title, closable, hasBack, onClose, onBack }: ModalHeaderProps) => {
  const { t } = useTranslation();

  return (
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
  );
};
