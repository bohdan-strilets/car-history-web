import type { root } from './textarea.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ComponentPropsWithoutRef } from 'react';

export type TextareaVariants = NonNullable<RecipeVariants<typeof root>>;

export type TextareaSize = NonNullable<TextareaVariants['size']>;
export type TextareaResize = NonNullable<TextareaVariants['resize']>;
export type TextareaState = NonNullable<TextareaVariants['state']>;

export interface TextareaOwnProps {
  size?: TextareaSize;
  resize?: TextareaResize;
  state?: TextareaState;
  maxRows?: number;
}

export type TextareaProps = TextareaOwnProps &
  Omit<ComponentPropsWithoutRef<'textarea'>, keyof TextareaOwnProps>;

// Hooks

export interface AutoResizeParams {
  maxRows?: number;
  value?: unknown;
}
