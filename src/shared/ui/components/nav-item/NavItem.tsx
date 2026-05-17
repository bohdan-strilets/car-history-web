import { Icon, Surface } from '@shared/ui/primitives';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';

import { labelText, root } from './nav-item.css';
import type { NavItemProps } from './nav-item.types';

export const NavItem = ({ icon, label, to, collapsed }: NavItemProps) => {
  return (
    <NavLink to={to} aria-label={label}>
      {({ isActive }) => (
        <Surface variant={isActive ? 'neuInset' : 'neuRaised'} className={clsx(root)}>
          <Icon name={icon} size="md" color={isActive ? 'accent' : 'secondary'} />
          {!collapsed && <span className={labelText}>{label}</span>}
        </Surface>
      )}
    </NavLink>
  );
};
