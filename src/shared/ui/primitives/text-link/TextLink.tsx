import { Link } from 'react-router-dom';

import { Text } from '../text';

import type { TextLinkProps } from './text-link.types';

export const TextLink = ({ to, label, size = 'sm', color = 'accent' }: TextLinkProps) => {
  return (
    <Link to={to}>
      <Text size={size} color={color}>
        {label}
      </Text>
    </Link>
  );
};
