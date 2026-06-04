import { useLanguage } from '@shared/i18n';
import { Button, SegmentControl } from '@shared/ui';
import { Tooltip } from '@shared/ui/components';
import { getNextCycleItem } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_CYCLE, LANGUAGE_OPTIONS } from './language-toggle.config';
import type { LanguageToggleProps } from './language-toggle.types';

export const LanguageToggle = ({ collapsed, className, tooltipPlacement }: LanguageToggleProps) => {
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslation();

  if (collapsed) {
    const handleCycle = () => {
      setLanguage(getNextCycleItem(LANGUAGE_CYCLE, currentLanguage));
    };

    return (
      <Tooltip label={t(`enums.language.${currentLanguage}`)} placement={tooltipPlacement}>
        <Button
          type="button"
          onClick={handleCycle}
          variant="ghost"
          size="sm"
          className={className}
          color="gray"
        >
          {currentLanguage}
        </Button>
      </Tooltip>
    );
  }

  return (
    <SegmentControl
      value={currentLanguage}
      onChange={setLanguage}
      options={LANGUAGE_OPTIONS}
      size="sm"
      withTooltip
      className={className}
    />
  );
};
