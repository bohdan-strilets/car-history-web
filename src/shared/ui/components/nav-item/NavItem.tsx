import { NavLink } from 'react-router-dom';

import { Icon, Panel, Text } from '@shared/ui';

import { hovered, rootLink } from './nav-item.css';

import type { NavItemProps } from './nav-item.types';

export const NavItem = ({ icon, label, to, collapsed }: NavItemProps) => {
  return (
    <NavLink to={to} aria-label={label} className={rootLink}>
      {({ isActive }) => {
        const activeColor = isActive ? 'accent' : 'secondary';

        return (
          <Panel
            variant={isActive ? 'neuInsetSm' : 'neuRaised'}
            justify={collapsed ? 'center' : 'start'}
            direction="row"
            align="center"
            gap="md"
            radius="md"
            p="md"
            className={!isActive ? hovered : undefined}
          >
            <Icon name={icon} size="md" color={activeColor} weight="fill" />
            {!collapsed && (
              <Text size="md" weight="medium" truncate color={activeColor}>
                {label}
              </Text>
            )}
          </Panel>
        );
      }}
    </NavLink>
  );
};
