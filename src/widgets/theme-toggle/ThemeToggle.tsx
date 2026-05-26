import { useTheme } from '@shared/styles';
import { Button, Icon, SegmentControl, Tooltip } from '@shared/ui';
import { translateSegmentControlOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { THEME_CYCLE, THEME_ICON, THEME_OPTIONS } from './theme-toggle.config';
import type { ThemeToggleProps } from './theme-toggle.types';

export const ThemeToggle = ({ size, className, collapsed }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  if (collapsed) {
    const handleCycle = () => {
      const currentIndex = THEME_CYCLE.indexOf(theme);
      const nextTheme = THEME_CYCLE[(currentIndex + 1) % THEME_CYCLE.length];
      setTheme(nextTheme);
    };

    return (
      <Tooltip
        label={t(`themes.${theme.toLowerCase() as 'dark' | 'light' | 'system'}`)}
        placement="right"
      >
        <Button variant="ghost" iconOnly onClick={handleCycle} className={className}>
          <Icon name={THEME_ICON[theme]} size="md" />
        </Button>
      </Tooltip>
    );
  }

  return (
    <SegmentControl
      value={theme}
      onChange={setTheme}
      options={translateSegmentControlOptions(t, THEME_OPTIONS)}
      size={size}
      withTooltip
      className={className}
    />
  );
};
