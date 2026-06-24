import { NavLink } from 'react-router-dom';

import { clsx } from 'clsx';

import { Icon, Surface } from '@shared/ui';

import { labelText, link, root } from './nav-item.css';

import type { NavItemProps } from './nav-item.types';

export const NavItem = ({ icon, label, to, collapsed }: NavItemProps) => {
  return (
    <NavLink to={to} aria-label={label} className={link}>
      {({ isActive }) => (
        <Surface variant={isActive ? 'neuInset' : 'neuRaised'} className={clsx(root)}>
          <Icon name={icon} size="md" color={isActive ? 'accent' : 'secondary'} />
          {!collapsed && <span className={labelText}>{label}</span>}
        </Surface>
      )}
    </NavLink>
  );
};
