import { useTranslation } from 'react-i18next';

import { clsx } from 'clsx';

import { NAV_ITEMS } from '@shared/config';
import {
  Box,
  Button,
  Divider,
  Icon,
  Logo,
  NavItem,
  Spacer,
  Stack,
  Text,
  Tooltip,
} from '@shared/ui';
import { LanguageToggle } from '@widgets/language-toggle';
import { ThemeToggle } from '@widgets/theme-toggle';
import { UserBar } from '@widgets/user-bar';
import { VehicleSwitcher } from '@widgets/vehicle-switcher';
import { WorkspaceSwitcher } from '@widgets/workspace-switcher';

import { root, spacer } from './sidebar.css';

import type { SidebarProps } from './sidebar.types';

export const Sidebar = ({ expanded, onToggle }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <Stack as="aside" align="center" gap="lg" className={clsx(root({ expanded }))}>
      <Logo size="lg" variant={!expanded ? 'icon' : 'full'} />

      <WorkspaceSwitcher expanded={expanded} onExpand={onToggle} />
      <VehicleSwitcher expanded={expanded} />

      <Spacer size="xs" />

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

      <Box width="full">
        <Stack gap="sm">
          <Stack direction="row" justify="between" align="center" gap="md">
            {expanded && <Text>{t('nav.sidebar.collapse')}:</Text>}
            <Tooltip
              label={t(expanded ? 'nav.sidebar.collapse' : 'nav.sidebar.expand')}
              placement={expanded ? 'top' : 'right'}
            >
              <Button
                variant="ghost"
                onClick={onToggle}
                iconOnly
                aria-label={expanded ? t('nav.sidebar.collapse') : t('nav.sidebar.expand')}
              >
                <Icon name={expanded ? 'panelLeft' : 'panelRight'} size="md" />
              </Button>
            </Tooltip>
          </Stack>

          <Stack direction="row" justify="between" align="center" gap="md">
            {expanded && <Text>{t('nav.sidebar.theme')}:</Text>}
            <ThemeToggle collapsed={!expanded} tooltipPlacement="right" />
          </Stack>

          <Stack direction="row" justify="between" align="center" gap="md">
            {expanded && <Text>{t('nav.sidebar.language')}:</Text>}
            <Stack direction="row" gap="sm">
              <LanguageToggle collapsed={!expanded} tooltipPlacement="right" />
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Spacer size="xs" />

      <UserBar expanded={expanded} direction={expanded ? undefined : 'right'} />
    </Stack>
  );
};
