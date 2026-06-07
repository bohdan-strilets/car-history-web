import { segment, segmentFill } from './stepper.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

export type StepperSegmentVariants = NonNullable<RecipeVariants<typeof segment>>;
export type StepperSize = NonNullable<StepperSegmentVariants['size']>;

export type StepperFillVariants = NonNullable<RecipeVariants<typeof segmentFill>>;
export type StepperColor = NonNullable<StepperFillVariants['color']>;

export interface StepperProps {
  currentStep: number;
  totalSteps: number;
  size?: StepperSize;
  color?: StepperColor;
}
