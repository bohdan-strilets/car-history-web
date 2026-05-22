import type { ParseKeys } from 'i18next';

import type { OnboardingStep } from './onboarding.types';

export const ONBOARDING_STEPS: OnboardingStep[] = [
  'welcome',
  'workspace',
  'vehicle',
  'settings',
  'timeline',
];

export const TOTAL_STEPS = ONBOARDING_STEPS.length;

export const ONBOARDING_STEP_INDEX: Record<OnboardingStep, number> = {
  welcome: 1,
  workspace: 2,
  vehicle: 3,
  settings: 4,
  timeline: 5,
};

export const ONBOARDING_STEP_TITLE_KEYS: Record<OnboardingStep, ParseKeys> = {
  welcome: 'onboarding.welcome.title',
  workspace: 'onboarding.workspace.title',
  vehicle: 'onboarding.vehicle.title',
  settings: 'onboarding.settings.title',
  timeline: 'onboarding.timeline.title',
};

export const ONBOARDING_STEP_SUBTITLE_KEYS: Record<OnboardingStep, ParseKeys> = {
  welcome: 'onboarding.welcome.subtitle',
  workspace: 'onboarding.workspace.subtitle',
  vehicle: 'onboarding.vehicle.subtitle',
  settings: 'onboarding.settings.subtitle',
  timeline: 'onboarding.timeline.subtitle',
};
