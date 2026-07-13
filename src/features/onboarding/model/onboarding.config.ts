import type { OnboardingStep } from './onboarding.types';
import type { ParseKeys } from 'i18next';

// Onboarding

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
  welcome: 'onboarding.steps.welcome.title',
  workspace: 'onboarding.steps.workspace.title',
  vehicle: 'onboarding.steps.vehicle.title',
  settings: 'onboarding.steps.settings.title',
  timeline: 'onboarding.steps.timeline.title',
};

export const ONBOARDING_STEP_SUBTITLE_KEYS: Record<OnboardingStep, ParseKeys> = {
  welcome: 'onboarding.steps.welcome.subtitle',
  workspace: 'onboarding.steps.workspace.subtitle',
  vehicle: 'onboarding.steps.vehicle.subtitle',
  settings: 'onboarding.steps.settings.subtitle',
  timeline: 'onboarding.steps.timeline.subtitle',
};
