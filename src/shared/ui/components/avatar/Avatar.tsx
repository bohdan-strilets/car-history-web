import { useState } from 'react';

import { clsx } from 'clsx';

import { root } from './avatar.css';
import { getInitials } from './avatar.utils';

import type { AvatarProps } from './avatar.types';

export const Avatar = ({
  firstName,
  lastName,
  avatarUrl,
  size,
  shape,
  variant,
  className,
  ...rest
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(firstName, lastName);
  const showImage = avatarUrl && !imgError;

  return (
    <div className={clsx(root({ size, shape, variant }), className)} {...rest}>
      {showImage ? (
        <img src={avatarUrl} alt={initials || 'avatar'} onError={() => setImgError(true)} />
      ) : (
        initials || '?'
      )}
    </div>
  );
};
