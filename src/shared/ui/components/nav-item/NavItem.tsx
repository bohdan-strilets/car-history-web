import { NavLink } from 'react-router-dom';

import { Icon, Panel, Text } from '@shared/ui';

import { rootLink } from './nav-item.css';

import type { NavItemProps } from './nav-item.types';

export const NavItem = ({ icon, label, to, collapsed }: NavItemProps) => {
  return (
    <NavLink to={to} aria-label={label} className={rootLink}>
      {({ isActive }) => {
        const activeIconColor = isActive ? 'accent' : 'secondary';

        return (
          <Panel
            variant={isActive ? 'neuInsetSm' : 'neuRaised'}
            p="md"
            direction="row"
            align="center"
            justify={collapsed ? 'center' : 'start'}
            gap="md"
            radius="md"
          >
            <Icon name={icon} size="md" color={activeIconColor} weight="fill" />
            {!collapsed && (
              <Text size="md" weight="medium" truncate>
                {label}
              </Text>
            )}
          </Panel>
        );
      }}
    </NavLink>
  );
};
