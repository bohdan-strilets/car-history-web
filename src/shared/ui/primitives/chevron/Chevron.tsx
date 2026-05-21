import { Icon } from '../icon';

import { root } from './chevron.css';
import type { ChevronProps } from './chevron.types';

export const Chevron = ({ open = false }: ChevronProps) => {
  return <Icon name="chevronDown" className={root({ open })} />;
};
