import { LANGUAGE, THEME } from '@entities/user';
import type { CardSelectOption } from '@shared/ui';

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

// Language and Theme options

export const LANGUAGE_CONFIG: CardSelectOption[] = [
  {
    id: '1',
    value: LANGUAGE.PL,
    label: `enums.language.${LANGUAGE.PL}`,
    description: '🇵🇱',
    color: 'rose',
  },
  {
    id: '2',
    value: LANGUAGE.UK,
    label: `enums.language.${LANGUAGE.UK}`,
    description: '🇺🇦',
    color: 'blue',
  },
  {
    id: '3',
    value: LANGUAGE.EN,
    label: `enums.language.${LANGUAGE.EN}`,
    description: '🇬🇧',
    color: 'green',
  },
];

export const THEME_CONFIG: CardSelectOption[] = [
  {
    id: '1',
    value: THEME.LIGHT,
    label: `enums.theme.${THEME.LIGHT}`,
    icon: 'sun',
    color: 'orange',
  },
  {
    id: '2',
    value: THEME.DARK,
    label: `enums.theme.${THEME.DARK}`,
    icon: 'moon',
    color: 'purple',
  },
  {
    id: '3',
    value: THEME.SYSTEM,
    label: `enums.theme.${THEME.SYSTEM}`,
    icon: 'monitor',
    color: 'sky',
  },
];
