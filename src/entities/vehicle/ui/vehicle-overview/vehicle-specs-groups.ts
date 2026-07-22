import type { VehicleSpecs } from '@entities/vehicle';
import type { PaletteColors } from '@shared/styles/model';

import type { ParseKeys, TFunction } from 'i18next';

export interface SpecChipItem {
  label: string;
  value: string;
}

export interface SpecGroup {
  id: string;
  titleKey: ParseKeys;
  color: PaletteColors;
  getItems: (specs: VehicleSpecs, t: TFunction) => SpecChipItem[];
}

export const SPEC_GROUPS: SpecGroup[] = [
  {
    id: 'engine',
    titleKey: 'vehicle.specs.sections.engine',
    color: 'blue',
    getItems: (specs, t) => {
      const items: SpecChipItem[] = [];
      if (specs.engineCode) {
        items.push({ label: t('vehicle.specs.fields.engineCode'), value: specs.engineCode });
      }
      if (specs.enginePowerHp != null) {
        items.push({
          label: t('vehicle.specs.fields.enginePowerHp'),
          value: `${specs.enginePowerHp} ${t('units.hp')}`,
        });
      }
      if (specs.enginePowerKw != null) {
        items.push({
          label: t('vehicle.specs.fields.enginePowerKw'),
          value: `${specs.enginePowerKw} ${t('units.kw')}`,
        });
      }
      if (specs.torqueNm != null) {
        items.push({
          label: t('vehicle.specs.fields.torqueNm'),
          value: `${specs.torqueNm} ${t('units.nm')}`,
        });
      }
      if (specs.cylindersCount != null) {
        items.push({
          label: t('vehicle.specs.fields.cylindersCount'),
          value: String(specs.cylindersCount),
        });
      }
      if (specs.gearsCount != null) {
        items.push({
          label: t('vehicle.specs.fields.gearsCount'),
          value: String(specs.gearsCount),
        });
      }
      if (specs.turbo !== undefined) {
        items.push({
          label: t('vehicle.specs.fields.turbo'),
          value: specs.turbo ? t('common.state.yes') : t('common.state.no'),
        });
      }
      return items;
    },
  },
  {
    id: 'consumption',
    titleKey: 'vehicle.specs.sections.consumption',
    color: 'amber',
    getItems: (specs, t) => {
      const items: SpecChipItem[] = [];
      if (specs.fuelTankCapacity != null) {
        items.push({
          label: t('vehicle.specs.fields.fuelTankCapacity'),
          value: `${specs.fuelTankCapacity} ${t('units.liters')}`,
        });
      }
      if (specs.combinedConsumption != null) {
        items.push({
          label: t('vehicle.specs.fields.combinedConsumption'),
          value: `${specs.combinedConsumption} ${t('units.lper100km')}`,
        });
      }
      if (specs.cityConsumption != null) {
        items.push({
          label: t('vehicle.specs.fields.cityConsumption'),
          value: `${specs.cityConsumption} ${t('units.lper100km')}`,
        });
      }
      if (specs.highwayConsumption != null) {
        items.push({
          label: t('vehicle.specs.fields.highwayConsumption'),
          value: `${specs.highwayConsumption} ${t('units.lper100km')}`,
        });
      }
      if (specs.batteryCapacityKwh != null) {
        items.push({
          label: t('vehicle.specs.fields.batteryCapacityKwh'),
          value: `${specs.batteryCapacityKwh} ${t('units.kwh')}`,
        });
      }
      if (specs.electricRangeKm != null) {
        items.push({
          label: t('vehicle.specs.fields.electricRangeKm'),
          value: `${specs.electricRangeKm} ${t('units.km')}`,
        });
      }
      return items;
    },
  },
  {
    id: 'performance',
    titleKey: 'vehicle.specs.sections.performance',
    color: 'green',
    getItems: (specs, t) => {
      const items: SpecChipItem[] = [];
      if (specs.accelerationSec != null) {
        items.push({
          label: t('vehicle.specs.fields.accelerationSec'),
          value: `${specs.accelerationSec} ${t('units.sec')}`,
        });
      }
      if (specs.topSpeedKmh != null) {
        items.push({
          label: t('vehicle.specs.fields.topSpeedKmh'),
          value: `${specs.topSpeedKmh} ${t('units.kmh')}`,
        });
      }
      return items;
    },
  },
  {
    id: 'dimensions',
    titleKey: 'vehicle.specs.sections.dimensions',
    color: 'violet',
    getItems: (specs, t) => {
      const items: SpecChipItem[] = [];
      if (specs.weightKg != null) {
        items.push({
          label: t('vehicle.specs.fields.weightKg'),
          value: `${specs.weightKg} ${t('units.kg')}`,
        });
      }
      if (specs.lengthMm != null) {
        items.push({
          label: t('vehicle.specs.fields.lengthMm'),
          value: `${specs.lengthMm} ${t('units.mm')}`,
        });
      }
      if (specs.widthMm != null) {
        items.push({
          label: t('vehicle.specs.fields.widthMm'),
          value: `${specs.widthMm} ${t('units.mm')}`,
        });
      }
      if (specs.heightMm != null) {
        items.push({
          label: t('vehicle.specs.fields.heightMm'),
          value: `${specs.heightMm} ${t('units.mm')}`,
        });
      }
      if (specs.wheelbaseMm != null) {
        items.push({
          label: t('vehicle.specs.fields.wheelbaseMm'),
          value: `${specs.wheelbaseMm} ${t('units.mm')}`,
        });
      }
      if (specs.groundClearanceMm != null) {
        items.push({
          label: t('vehicle.specs.fields.groundClearanceMm'),
          value: `${specs.groundClearanceMm} ${t('units.mm')}`,
        });
      }
      if (specs.trunkVolumeLiters != null) {
        items.push({
          label: t('vehicle.specs.fields.trunkVolumeLiters'),
          value: `${specs.trunkVolumeLiters} ${t('units.liters')}`,
        });
      }
      return items;
    },
  },
  {
    id: 'interior',
    titleKey: 'vehicle.specs.sections.interior',
    color: 'teal',
    getItems: (specs, t) => {
      const items: SpecChipItem[] = [];
      if (specs.numberOfSeats != null) {
        items.push({
          label: t('vehicle.specs.fields.numberOfSeats'),
          value: String(specs.numberOfSeats),
        });
      }
      if (specs.numberOfDoors != null) {
        items.push({
          label: t('vehicle.specs.fields.numberOfDoors'),
          value: String(specs.numberOfDoors),
        });
      }
      if (specs.airbagsCount != null) {
        items.push({
          label: t('vehicle.specs.fields.airbagsCount'),
          value: String(specs.airbagsCount),
        });
      }
      return items;
    },
  },
  {
    id: 'safetyEco',
    titleKey: 'vehicle.specs.sections.safetyEco',
    color: 'rose',
    getItems: (specs, t) => {
      const items: SpecChipItem[] = [];
      if (specs.euroStandard) {
        items.push({ label: t('vehicle.specs.fields.euroStandard'), value: specs.euroStandard });
      }
      if (specs.ncapRating != null) {
        items.push({
          label: t('vehicle.specs.fields.ncapRating'),
          value: `${specs.ncapRating}/5`,
        });
      }
      if (specs.co2EmissionGKm != null) {
        items.push({
          label: t('vehicle.specs.fields.co2EmissionGKm'),
          value: `${specs.co2EmissionGKm} ${t('units.gkm')}`,
        });
      }
      return items;
    },
  },
  {
    id: 'tires',
    titleKey: 'vehicle.specs.sections.tires',
    color: 'gray',
    getItems: (specs, t) => {
      const items: SpecChipItem[] = [];
      if (specs.tireSizeFront) {
        items.push({
          label: t('vehicle.specs.fields.tireSizeFront'),
          value: specs.tireSizeFront,
        });
      }
      if (specs.tireSizeRear) {
        items.push({ label: t('vehicle.specs.fields.tireSizeRear'), value: specs.tireSizeRear });
      }
      return items;
    },
  },
];
