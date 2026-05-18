import type { ParseKeys } from 'i18next';

import type { OnboardingStep } from './onboarding.types';

export const ONBOARDING_STEPS: OnboardingStep[] = ['workspace', 'vehicle', 'settings', 'timeline'];

export const TOTAL_STEPS = ONBOARDING_STEPS.length;

export const ONBOARDING_STEP_INDEX: Record<OnboardingStep, number> = {
  workspace: 1,
  vehicle: 2,
  settings: 3,
  timeline: 4,
};

export const ONBOARDING_STEP_TITLE_KEYS: Record<OnboardingStep, ParseKeys> = {
  workspace: 'onboarding.workspace.title',
  vehicle: 'onboarding.vehicle.title',
  settings: 'onboarding.settings.title',
  timeline: 'onboarding.timeline.title',
};
