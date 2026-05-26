import { useLanguage } from '@shared/i18n';
import { SegmentControl } from '@shared/ui';
import { Tooltip } from '@shared/ui/components';
import { option } from '@shared/ui/primitives/segment-control/segment-control.css';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_CYCLE, LANGUAGE_OPTIONS } from './language-toggle.config';
import type { LanguageToggleProps } from './language-toggle.types';

export const LanguageToggle = ({ collapsed, size = 'md', className }: LanguageToggleProps) => {
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslation();

  if (collapsed) {
    const handleCycle = () => {
      const next =
        LANGUAGE_CYCLE[(LANGUAGE_CYCLE.indexOf(currentLanguage) + 1) % LANGUAGE_CYCLE.length];
      setLanguage(next);
    };

    return (
      <Tooltip
        label={t(`languages.${currentLanguage.toLowerCase() as 'pl' | 'uk' | 'en'}`)}
        placement="right"
      >
        <button
          type="button"
          className={option({ size, active: false })}
          onClick={handleCycle}
          aria-label={currentLanguage}
        >
          <span>{currentLanguage}</span>
        </button>
      </Tooltip>
    );
  }

  return (
    <SegmentControl
      value={currentLanguage}
      onChange={setLanguage}
      options={LANGUAGE_OPTIONS}
      size={size}
      withTooltip
      className={className}
    />
  );
};
