import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ComponentPropsWithoutRef } from 'react';

import { root } from './avatar.css';

type RootVariants = NonNullable<RecipeVariants<typeof root>>;

export type AvatarSize = RootVariants['size'];
export type AvatarShape = RootVariants['shape'];
export type AvatarVariant = RootVariants['variant'];

export interface AvatarProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string | null;
  size?: AvatarSize;
  shape?: AvatarShape;
  variant?: AvatarVariant;
}
