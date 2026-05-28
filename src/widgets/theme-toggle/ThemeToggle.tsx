import { useTheme } from '@shared/styles';
import { Button, Icon, SegmentControl, Tooltip } from '@shared/ui';
import { getNextCycleItem, translateSegmentControlOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { THEME_CYCLE, THEME_ICON, THEME_OPTIONS } from './theme-toggle.config';
import type { ThemeToggleProps } from './theme-toggle.types';

export const ThemeToggle = ({ className, collapsed }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  if (collapsed) {
    const handleCycle = () => {
      setTheme(getNextCycleItem(THEME_CYCLE, theme));
    };

    return (
      <Tooltip label={t(`themes.${theme}`)} placement="right">
        <Button
          type="button"
          onClick={handleCycle}
          variant="ghost"
          size="sm"
          className={className}
          color="gray"
        >
          <Icon name={THEME_ICON[theme]} size="sm" />
        </Button>
      </Tooltip>
    );
  }

  return (
    <SegmentControl
      value={theme}
      onChange={setTheme}
      options={translateSegmentControlOptions(t, THEME_OPTIONS)}
      size="sm"
      withTooltip
      className={className}
    />
  );
};
