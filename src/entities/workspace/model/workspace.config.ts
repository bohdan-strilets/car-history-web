import type { ComboboxOption } from '@shared/ui';
import type { CardSelectOption } from '@shared/ui/components/card-select';

import { CURRENCY, DATE_FORMAT, DISTANCE_UNIT, FUEL_UNIT, WORKSPACE_TYPE } from './workspace.types';

export const WORKSPACE_TYPE_CONFIG: CardSelectOption[] = [
  {
    id: 'personal',
    label: `workspace.types.${WORKSPACE_TYPE.PERSONAL}.label`,
    value: WORKSPACE_TYPE.PERSONAL,
    icon: 'user',
    color: 'orange',
    description: `workspace.types.${WORKSPACE_TYPE.PERSONAL}.description`,
  },
  {
    id: 'family',
    label: `workspace.types.${WORKSPACE_TYPE.FAMILY}.label`,
    value: WORKSPACE_TYPE.FAMILY,
    icon: 'users',
    color: 'blue',
    description: `workspace.types.${WORKSPACE_TYPE.FAMILY}.description`,
  },
  {
    id: 'business',
    label: `workspace.types.${WORKSPACE_TYPE.BUSINESS}.label`,
    value: WORKSPACE_TYPE.BUSINESS,
    icon: 'briefcase',
    color: 'violet',
    description: `workspace.types.${WORKSPACE_TYPE.BUSINESS}.description`,
  },
];

export const CURRENCY_CONFIG: CardSelectOption[] = [
  {
    id: 'pln',
    value: CURRENCY.PLN,
    label: 'workspace.currency.PLN',
    icon: 'wallet',
    color: 'green',
  },
  {
    id: 'eur',
    value: CURRENCY.EUR,
    label: 'workspace.currency.EUR',
    icon: 'wallet',
    color: 'blue',
  },
  {
    id: 'usd',
    value: CURRENCY.USD,
    label: 'workspace.currency.USD',
    icon: 'wallet',
    color: 'teal',
  },
  {
    id: 'uah',
    value: CURRENCY.UAH,
    label: 'workspace.currency.UAH',
    icon: 'wallet',
    color: 'yellow',
  },
];

export const DISTANCE_UNIT_CONFIG: CardSelectOption[] = [
  {
    id: 'km',
    value: DISTANCE_UNIT.KM,
    label: 'units.KM',
    icon: 'gauge',
    color: 'blue',
  },
  {
    id: 'mi',
    value: DISTANCE_UNIT.MI,
    label: 'units.MI',
    icon: 'gauge',
    color: 'orange',
  },
];

export const FUEL_UNIT_CONFIG: CardSelectOption[] = [
  {
    id: 'l',
    value: FUEL_UNIT.L,
    label: 'units.L',
    icon: 'droplets',
    color: 'teal',
  },
  {
    id: 'gal',
    value: FUEL_UNIT.GAL,
    label: 'units.GAL',
    icon: 'droplets',
    color: 'blue',
  },
];

export const DATE_FORMAT_CONFIG: CardSelectOption[] = [
  {
    id: 'dd_mm_yyyy',
    value: DATE_FORMAT.DD_MM_YYYY,
    label: 'workspace.dateFormat.DD_MM_YYYY',
    icon: 'calendar',
    color: 'violet',
  },
  {
    id: 'yyyy_mm_dd',
    value: DATE_FORMAT.YYYY_MM_DD,
    label: 'workspace.dateFormat.YYYY_MM_DD',
    icon: 'calendar',
    color: 'violet',
  },
  {
    id: 'dd_month_yyyy',
    value: DATE_FORMAT.DD_MONTH_YYYY,
    label: 'workspace.dateFormat.DD_MONTH_YYYY',
    icon: 'calendar',
    color: 'violet',
  },
];

export const TIMEZONE_CONFIG: ComboboxOption[] = [
  {
    id: 'europe_warsaw',
    value: 'Europe/Warsaw',
    label: 'Europe/Warsaw (UTC+1/+2)',
  },
  {
    id: 'europe_kyiv',
    value: 'Europe/Kyiv',
    label: 'Europe/Kyiv (UTC+2/+3)',
  },
  {
    id: 'europe_london',
    value: 'Europe/London',
    label: 'Europe/London (UTC+0/+1)',
  },
  {
    id: 'europe_berlin',
    value: 'Europe/Berlin',
    label: 'Europe/Berlin (UTC+1/+2)',
  },
  {
    id: 'europe_paris',
    value: 'Europe/Paris',
    label: 'Europe/Paris (UTC+1/+2)',
  },
  {
    id: 'europe_rome',
    value: 'Europe/Rome',
    label: 'Europe/Rome (UTC+1/+2)',
  },
  {
    id: 'europe_madrid',
    value: 'Europe/Madrid',
    label: 'Europe/Madrid (UTC+1/+2)',
  },
  {
    id: 'europe_amsterdam',
    value: 'Europe/Amsterdam',
    label: 'Europe/Amsterdam (UTC+1/+2)',
  },
  {
    id: 'europe_prague',
    value: 'Europe/Prague',
    label: 'Europe/Prague (UTC+1/+2)',
  },
  {
    id: 'europe_vienna',
    value: 'Europe/Vienna',
    label: 'Europe/Vienna (UTC+1/+2)',
  },
  {
    id: 'europe_budapest',
    value: 'Europe/Budapest',
    label: 'Europe/Budapest (UTC+1/+2)',
  },
  {
    id: 'europe_bucharest',
    value: 'Europe/Bucharest',
    label: 'Europe/Bucharest (UTC+2/+3)',
  },
  {
    id: 'europe_sofia',
    value: 'Europe/Sofia',
    label: 'Europe/Sofia (UTC+2/+3)',
  },
  {
    id: 'europe_helsinki',
    value: 'Europe/Helsinki',
    label: 'Europe/Helsinki (UTC+2/+3)',
  },
  {
    id: 'europe_stockholm',
    value: 'Europe/Stockholm',
    label: 'Europe/Stockholm (UTC+1/+2)',
  },
  {
    id: 'europe_oslo',
    value: 'Europe/Oslo',
    label: 'Europe/Oslo (UTC+1/+2)',
  },
  {
    id: 'europe_copenhagen',
    value: 'Europe/Copenhagen',
    label: 'Europe/Copenhagen (UTC+1/+2)',
  },
  {
    id: 'europe_zurich',
    value: 'Europe/Zurich',
    label: 'Europe/Zurich (UTC+1/+2)',
  },
  {
    id: 'america_new_york',
    value: 'America/New_York',
    label: 'America/New_York (UTC-5/-4)',
  },
  {
    id: 'america_chicago',
    value: 'America/Chicago',
    label: 'America/Chicago (UTC-6/-5)',
  },
  {
    id: 'america_los_angeles',
    value: 'America/Los_Angeles',
    label: 'America/Los_Angeles (UTC-8/-7)',
  },
  {
    id: 'utc',
    value: 'UTC',
    label: 'UTC (UTC+0)',
  },
];
