import type { CardSelectOption } from '@shared/ui/components/card-select';

import type { ColorPickerOption } from '../ui';

import { BODY_TYPE, DRIVE_TYPE, FUEL_TYPE, TRANSMISSION } from './vehicle.types';

export const VEHICLE_POPULAR_BRANDS_CONFIG: CardSelectOption[] = [
  {
    id: 'volkswagen',
    value: 'Volkswagen',
    label: 'Volkswagen',
    icon: 'car',
    color: 'blue',
  },
  {
    id: 'toyota',
    value: 'Toyota',
    label: 'Toyota',
    icon: 'car',
    color: 'purple',
  },
  {
    id: 'skoda',
    value: 'Škoda',
    label: 'Škoda',
    icon: 'car',
    color: 'green',
  },
  {
    id: 'ford',
    value: 'Ford',
    label: 'Ford',
    icon: 'car',
    color: 'blue',
  },
  {
    id: 'opel',
    value: 'Opel',
    label: 'Opel',
    icon: 'car',
    color: 'amber',
  },
  {
    id: 'bmw',
    value: 'BMW',
    label: 'BMW',
    icon: 'car',
    color: 'sky',
  },
  {
    id: 'audi',
    value: 'Audi',
    label: 'Audi',
    icon: 'car',
    color: 'gray',
  },
  {
    id: 'mercedes',
    value: 'Mercedes-Benz',
    label: 'Mercedes-Benz',
    icon: 'car',
    color: 'teal',
  },
  {
    id: 'peugeot',
    value: 'Peugeot',
    label: 'Peugeot',
    icon: 'car',
    color: 'indigo',
  },
  {
    id: 'kia',
    value: 'Kia',
    label: 'Kia',
    icon: 'car',
    color: 'orange',
  },
];

export const FUEL_TYPE_CONFIG: CardSelectOption[] = [
  {
    id: 'petrol',
    value: FUEL_TYPE.PETROL,
    label: 'vehicle.fuelType.PETROL',
    icon: 'fuel',
    color: 'orange',
  },
  {
    id: 'diesel',
    value: FUEL_TYPE.DIESEL,
    label: 'vehicle.fuelType.DIESEL',
    icon: 'fuel',
    color: 'gray',
  },
  {
    id: 'hybrid',
    value: FUEL_TYPE.HYBRID,
    label: 'vehicle.fuelType.HYBRID',
    icon: 'zap',
    color: 'green',
  },
  {
    id: 'electric',
    value: FUEL_TYPE.ELECTRIC,
    label: 'vehicle.fuelType.ELECTRIC',
    icon: 'batteryCharging',
    color: 'teal',
  },
  {
    id: 'lpg',
    value: FUEL_TYPE.LPG,
    label: 'vehicle.fuelType.LPG',
    icon: 'flame',
    color: 'amber',
  },
];

export const BODY_TYPE_CONFIG: CardSelectOption[] = [
  {
    id: 'sedan',
    value: BODY_TYPE.SEDAN,
    label: 'vehicle.bodyType.SEDAN',
    icon: 'car',
    color: 'blue',
  },
  {
    id: 'hatchback',
    value: BODY_TYPE.HATCHBACK,
    label: 'vehicle.bodyType.HATCHBACK',
    icon: 'car',
    color: 'blue',
  },
  {
    id: 'wagon',
    value: BODY_TYPE.WAGON,
    label: 'vehicle.bodyType.WAGON',
    icon: 'car',
    color: 'blue',
  },
  {
    id: 'suv',
    value: BODY_TYPE.SUV,
    label: 'vehicle.bodyType.SUV',
    icon: 'car',
    color: 'green',
  },
  {
    id: 'crossover',
    value: BODY_TYPE.CROSSOVER,
    label: 'vehicle.bodyType.CROSSOVER',
    icon: 'car',
    color: 'teal',
  },
  {
    id: 'coupe',
    value: BODY_TYPE.COUPE,
    label: 'vehicle.bodyType.COUPE',
    icon: 'car',
    color: 'violet',
  },
  {
    id: 'convertible',
    value: BODY_TYPE.CONVERTIBLE,
    label: 'vehicle.bodyType.CONVERTIBLE',
    icon: 'car',
    color: 'pink',
  },
  {
    id: 'minivan',
    value: BODY_TYPE.MINIVAN,
    label: 'vehicle.bodyType.MINIVAN',
    icon: 'car',
    color: 'amber',
  },
  {
    id: 'pickup',
    value: BODY_TYPE.PICKUP,
    label: 'vehicle.bodyType.PICKUP',
    icon: 'car',
    color: 'orange',
  },
  {
    id: 'van',
    value: BODY_TYPE.VAN,
    label: 'vehicle.bodyType.VAN',
    icon: 'car',
    color: 'gray',
  },
  {
    id: 'other',
    value: BODY_TYPE.OTHER,
    label: 'vehicle.bodyType.OTHER',
    icon: 'car',
    color: 'gray',
  },
];

export const TRANSMISSION_CONFIG: CardSelectOption[] = [
  {
    id: 'manual',
    value: TRANSMISSION.MANUAL,
    label: 'vehicle.transmission.MANUAL',
    icon: 'cog',
    color: 'blue',
  },
  {
    id: 'automatic',
    value: TRANSMISSION.AUTOMATIC,
    label: 'vehicle.transmission.AUTOMATIC',
    icon: 'cog',
    color: 'green',
  },
  {
    id: 'robotic',
    value: TRANSMISSION.ROBOTIC,
    label: 'vehicle.transmission.ROBOTIC',
    icon: 'cog',
    color: 'violet',
  },
];

export const DRIVE_TYPE_CONFIG: CardSelectOption[] = [
  {
    id: 'fwd',
    value: DRIVE_TYPE.FWD,
    label: 'vehicle.driveType.FWD',
    icon: 'car',
    color: 'blue',
  },
  {
    id: 'rwd',
    value: DRIVE_TYPE.RWD,
    label: 'vehicle.driveType.RWD',
    icon: 'car',
    color: 'orange',
  },
  {
    id: 'awd',
    value: DRIVE_TYPE.AWD,
    label: 'vehicle.driveType.AWD',
    icon: 'car',
    color: 'green',
  },
];

export const VEHICLE_COLORS_CONFIG: ColorPickerOption[] = [
  {
    id: 'black',
    value: 'BLACK',
    label: 'vehicle.colors.BLACK',
    hex: '#1C1C1C',
  },
  {
    id: 'white',
    value: 'WHITE',
    label: 'vehicle.colors.WHITE',
    hex: '#F2F2F2',
  },
  {
    id: 'silver',
    value: 'SILVER',
    label: 'vehicle.colors.SILVER',
    hex: '#A8A9AD',
  },
  {
    id: 'gray',
    value: 'GRAY',
    label: 'vehicle.colors.GRAY',
    hex: '#6B6B6B',
  },
  {
    id: 'dark_gray',
    value: 'DARK_GRAY',
    label: 'vehicle.colors.DARK_GRAY',
    hex: '#3D3D3D',
  },
  {
    id: 'red',
    value: 'RED',
    label: 'vehicle.colors.RED',
    hex: '#B22222',
  },
  {
    id: 'dark_red',
    value: 'DARK_RED',
    label: 'vehicle.colors.DARK_RED',
    hex: '#7B0000',
  },
  {
    id: 'blue',
    value: 'BLUE',
    label: 'vehicle.colors.BLUE',
    hex: '#1B3A6B',
  },
  {
    id: 'light_blue',
    value: 'LIGHT_BLUE',
    label: 'vehicle.colors.LIGHT_BLUE',
    hex: '#5B8DB8',
  },
  {
    id: 'navy',
    value: 'NAVY',
    label: 'vehicle.colors.NAVY',
    hex: '#0A1628',
  },
  {
    id: 'green',
    value: 'GREEN',
    label: 'vehicle.colors.GREEN',
    hex: '#2D5A27',
  },
  {
    id: 'olive',
    value: 'OLIVE',
    label: 'vehicle.colors.OLIVE',
    hex: '#556B2F',
  },
  {
    id: 'brown',
    value: 'BROWN',
    label: 'vehicle.colors.BROWN',
    hex: '#5C3317',
  },
  {
    id: 'beige',
    value: 'BEIGE',
    label: 'vehicle.colors.BEIGE',
    hex: '#C8B89A',
  },
  {
    id: 'champagne',
    value: 'CHAMPAGNE',
    label: 'vehicle.colors.CHAMPAGNE',
    hex: '#C8A96E',
  },
  {
    id: 'gold',
    value: 'GOLD',
    label: 'vehicle.colors.GOLD',
    hex: '#B8960C',
  },
  {
    id: 'orange',
    value: 'ORANGE',
    label: 'vehicle.colors.ORANGE',
    hex: '#C45B00',
  },
  {
    id: 'yellow',
    value: 'YELLOW',
    label: 'vehicle.colors.YELLOW',
    hex: '#D4A800',
  },
  {
    id: 'purple',
    value: 'PURPLE',
    label: 'vehicle.colors.PURPLE',
    hex: '#4A235A',
  },
  {
    id: 'other',
    value: 'OTHER',
    label: 'vehicle.colors.OTHER',
    hex: '#888888',
  },
];
