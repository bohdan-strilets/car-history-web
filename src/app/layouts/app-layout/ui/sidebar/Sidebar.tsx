import { NAV_ITEMS } from '@shared/config';
import { Button, Divider, Icon, Logo, NavItem, Stack } from '@shared/ui';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

import { root, spacer } from './sidebar.css';
import type { SidebarProps } from './sidebar.types';

export const Sidebar = ({ expanded, onToggle }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <Stack as="aside" align="center" gap="lg" className={clsx(root({ expanded }))}>
      <Logo size="lg" variant={!expanded ? 'icon' : 'full'} />

      <Divider />

      {/* Workspace switcher — placeholder until WorkspaceStore */}

      <Divider />

      <Stack as="nav" gap="md" aria-label={t('nav.sidebar.ariaLabel')}>
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={t(item.labelKey)}
            to={item.to}
            collapsed={!expanded}
          />
        ))}
      </Stack>

      <div className={spacer} />

      <Divider />

      <Button
        variant="ghost"
        onClick={onToggle}
        iconOnly
        aria-label={expanded ? t('nav.sidebar.collapse') : t('nav.sidebar.expand')}
      >
        <Icon name={expanded ? 'panelLeft' : 'panelRight'} size="md" />
      </Button>

      <Divider />

      {/* User — placeholder until UserStore */}
    </Stack>
  );
};
