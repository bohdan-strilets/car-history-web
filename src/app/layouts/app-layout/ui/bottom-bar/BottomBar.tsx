import { NAV_ITEMS } from '@shared/config';
import { NavItem, Stack } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { root } from './bottom-bar.css';

export const BottomBar = () => {
  const { t } = useTranslation();

  return (
    <Stack
      as="nav"
      direction="row"
      align="center"
      justify="evenly"
      gap="md"
      className={root}
      aria-label={t('nav.bottomBar.ariaLabel')}
    >
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.to}
          icon={item.icon}
          label={t(item.labelKey)}
          to={item.to}
          collapsed={true}
        />
      ))}
    </Stack>
  );
};
