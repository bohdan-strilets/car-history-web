import type { EntityOption } from '@shared/types';

import {
  BODY_TYPE,
  DRIVE_TYPE,
  FUEL_TYPE,
  REFUEL_TYPE,
  TRANSMISSION,
  type BodyType,
  type DriveType,
  type FuelType,
  type RefuelType,
  type Transmission,
} from './vehicle.constants';

import type { ColorPickerOption } from '../ui';
import type { VehiclePopularBrand } from './vehicle.data';

// Entity options

export const VEHICLE_POPULAR_BRANDS_CONFIG: EntityOption<VehiclePopularBrand>[] = [
  {
    id: '1',
    value: 'Volkswagen',
    label: 'Volkswagen',
    icon: 'car',
    color: 'blue',
  },
  {
    id: '2',
    value: 'Toyota',
    label: 'Toyota',
    icon: 'car',
    color: 'purple',
  },
  {
    id: '3',
    value: 'Škoda',
    label: 'Škoda',
    icon: 'car',
    color: 'green',
  },
  {
    id: '4',
    value: 'Ford',
    label: 'Ford',
    icon: 'car',
    color: 'blue',
  },
  {
    id: '5',
    value: 'Opel',
    label: 'Opel',
    icon: 'car',
    color: 'amber',
  },
  {
    id: '6',
    value: 'BMW',
    label: 'BMW',
    icon: 'car',
    color: 'sky',
  },
  {
    id: '7',
    value: 'Audi',
    label: 'Audi',
    icon: 'car',
    color: 'gray',
  },
  {
    id: '8',
    value: 'Mercedes-Benz',
    label: 'Mercedes-Benz',
    icon: 'car',
    color: 'teal',
  },
  {
    id: '9',
    value: 'Peugeot',
    label: 'Peugeot',
    icon: 'car',
    color: 'indigo',
  },
  {
    id: '10',
    value: 'Kia',
    label: 'Kia',
    icon: 'car',
    color: 'orange',
  },
];

export const FUEL_TYPE_CONFIG: EntityOption<FuelType>[] = [
  {
    id: '1',
    value: FUEL_TYPE.PETROL,
    label: `enums.fuelType.${FUEL_TYPE.PETROL}`,
    icon: 'fuel',
    color: 'orange',
  },
  {
    id: '2',
    value: FUEL_TYPE.DIESEL,
    label: `enums.fuelType.${FUEL_TYPE.DIESEL}`,
    icon: 'fuel',
    color: 'gray',
  },
  {
    id: '3',
    value: FUEL_TYPE.HYBRID,
    label: `enums.fuelType.${FUEL_TYPE.HYBRID}`,
    icon: 'zap',
    color: 'green',
  },
  {
    id: '4',
    value: FUEL_TYPE.ELECTRIC,
    label: `enums.fuelType.${FUEL_TYPE.ELECTRIC}`,
    icon: 'batteryCharging',
    color: 'teal',
  },
  {
    id: '5',
    value: FUEL_TYPE.LPG,
    label: `enums.fuelType.${FUEL_TYPE.LPG}`,
    icon: 'flame',
    color: 'amber',
  },
];

export const REFUEL_TYPE_CONFIG: EntityOption<RefuelType>[] = [
  {
    id: '1',
    value: REFUEL_TYPE.PETROL,
    label: `enums.fuelType.${REFUEL_TYPE.PETROL}`,
    icon: 'fuel',
    color: 'orange',
  },
  {
    id: '2',
    value: REFUEL_TYPE.DIESEL,
    label: `enums.fuelType.${REFUEL_TYPE.DIESEL}`,
    icon: 'fuel',
    color: 'gray',
  },
  {
    id: '3',
    value: REFUEL_TYPE.LPG,
    label: `enums.fuelType.${REFUEL_TYPE.LPG}`,
    icon: 'flame',
    color: 'amber',
  },
];

export const BODY_TYPE_CONFIG: EntityOption<BodyType>[] = [
  {
    id: '1',
    value: BODY_TYPE.SEDAN,
    label: `enums.bodyType.${BODY_TYPE.SEDAN}`,
    icon: 'car',
    color: 'blue',
  },
  {
    id: '2',
    value: BODY_TYPE.HATCHBACK,
    label: `enums.bodyType.${BODY_TYPE.HATCHBACK}`,
    icon: 'car',
    color: 'blue',
  },
  {
    id: '3',
    value: BODY_TYPE.WAGON,
    label: `enums.bodyType.${BODY_TYPE.WAGON}`,
    icon: 'car',
    color: 'blue',
  },
  {
    id: '4',
    value: BODY_TYPE.SUV,
    label: `enums.bodyType.${BODY_TYPE.SUV}`,
    icon: 'car',
    color: 'green',
  },
  {
    id: '5',
    value: BODY_TYPE.CROSSOVER,
    label: `enums.bodyType.${BODY_TYPE.CROSSOVER}`,
    icon: 'car',
    color: 'teal',
  },
  {
    id: '6',
    value: BODY_TYPE.COUPE,
    label: `enums.bodyType.${BODY_TYPE.COUPE}`,
    icon: 'car',
    color: 'violet',
  },
  {
    id: '7',
    value: BODY_TYPE.CONVERTIBLE,
    label: `enums.bodyType.${BODY_TYPE.CONVERTIBLE}`,
    icon: 'car',
    color: 'pink',
  },
  {
    id: '8',
    value: BODY_TYPE.MINIVAN,
    label: `enums.bodyType.${BODY_TYPE.MINIVAN}`,
    icon: 'car',
    color: 'amber',
  },
  {
    id: '9',
    value: BODY_TYPE.PICKUP,
    label: `enums.bodyType.${BODY_TYPE.PICKUP}`,
    icon: 'car',
    color: 'orange',
  },
  {
    id: '10',
    value: BODY_TYPE.VAN,
    label: `enums.bodyType.${BODY_TYPE.VAN}`,
    icon: 'car',
    color: 'gray',
  },
  {
    id: '11',
    value: BODY_TYPE.OTHER,
    label: `enums.bodyType.${BODY_TYPE.OTHER}`,
    icon: 'car',
    color: 'gray',
  },
];

export const TRANSMISSION_CONFIG: EntityOption<Transmission>[] = [
  {
    id: '1',
    value: TRANSMISSION.MANUAL,
    label: `enums.transmission.${TRANSMISSION.MANUAL}`,
    icon: 'cog',
    color: 'blue',
  },
  {
    id: '2',
    value: TRANSMISSION.AUTOMATIC,
    label: `enums.transmission.${TRANSMISSION.AUTOMATIC}`,
    icon: 'cog',
    color: 'green',
  },
  {
    id: '3',
    value: TRANSMISSION.ROBOTIC,
    label: `enums.transmission.${TRANSMISSION.ROBOTIC}`,
    icon: 'cog',
    color: 'violet',
  },
];

export const DRIVE_TYPE_CONFIG: EntityOption<DriveType>[] = [
  {
    id: '1',
    value: DRIVE_TYPE.FWD,
    label: `enums.driveTypeShort.${DRIVE_TYPE.FWD}`,
    icon: 'car',
    color: 'blue',
  },
  {
    id: '2',
    value: DRIVE_TYPE.RWD,
    label: `enums.driveTypeShort.${DRIVE_TYPE.RWD}`,
    icon: 'car',
    color: 'orange',
  },
  {
    id: '3',
    value: DRIVE_TYPE.AWD,
    label: `enums.driveTypeShort.${DRIVE_TYPE.AWD}`,
    icon: 'car',
    color: 'green',
  },
];

// Color picker options

export const VEHICLE_COLORS_CONFIG: ColorPickerOption[] = [
  {
    id: '1',
    value: 'BLACK',
    label: 'enums.color.BLACK',
    hex: '#1C1C1C',
  },
  {
    id: '2',
    value: 'WHITE',
    label: 'enums.color.WHITE',
    hex: '#F2F2F2',
  },
  {
    id: '3',
    value: 'SILVER',
    label: 'enums.color.SILVER',
    hex: '#A8A9AD',
  },
  {
    id: '4',
    value: 'GRAY',
    label: 'enums.color.GRAY',
    hex: '#6B6B6B',
  },
  {
    id: '5',
    value: 'DARK_GRAY',
    label: 'enums.color.DARK_GRAY',
    hex: '#3D3D3D',
  },
  {
    id: '6',
    value: 'RED',
    label: 'enums.color.RED',
    hex: '#B22222',
  },
  {
    id: '7',
    value: 'DARK_RED',
    label: 'enums.color.DARK_RED',
    hex: '#7B0000',
  },
  {
    id: '8',
    value: 'BLUE',
    label: 'enums.color.BLUE',
    hex: '#1B3A6B',
  },
  {
    id: '9',
    value: 'LIGHT_BLUE',
    label: 'enums.color.LIGHT_BLUE',
    hex: '#5B8DB8',
  },
  {
    id: '10',
    value: 'NAVY',
    label: 'enums.color.NAVY',
    hex: '#0A1628',
  },
  {
    id: '11',
    value: 'GREEN',
    label: 'enums.color.GREEN',
    hex: '#2D5A27',
  },
  {
    id: '12',
    value: 'OLIVE',
    label: 'enums.color.OLIVE',
    hex: '#556B2F',
  },
  {
    id: '13',
    value: 'BROWN',
    label: 'enums.color.BROWN',
    hex: '#5C3317',
  },
  {
    id: '14',
    value: 'BEIGE',
    label: 'enums.color.BEIGE',
    hex: '#C8B89A',
  },
  {
    id: '15',
    value: 'CHAMPAGNE',
    label: 'enums.color.CHAMPAGNE',
    hex: '#C8A96E',
  },
  {
    id: '16',
    value: 'GOLD',
    label: 'enums.color.GOLD',
    hex: '#B8960C',
  },
  {
    id: '17',
    value: 'ORANGE',
    label: 'enums.color.ORANGE',
    hex: '#C45B00',
  },
  {
    id: '18',
    value: 'YELLOW',
    label: 'enums.color.YELLOW',
    hex: '#D4A800',
  },
  {
    id: '19',
    value: 'PURPLE',
    label: 'enums.color.PURPLE',
    hex: '#4A235A',
  },
  {
    id: '20',
    value: 'OTHER',
    label: 'enums.color.OTHER',
    hex: '#888888',
  },
];
