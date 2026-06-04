import { useUpdateVehicleSpecsMutation } from '@features/vehicle/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { showToast } from '@shared/lib/toast';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { createVehicleSpecsSchema, type VehicleSpecsValues } from './vehicle-specs.schema';
import type { EditVehicleSpecsFormParams } from './vehicle.types';

export const useEditVehicleSpecsForm = ({ vehicle, onSuccess }: EditVehicleSpecsFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createVehicleSpecsSchema());

  const defaultValues: VehicleSpecsValues = {
    engineCode: vehicle.specs?.engineCode ?? '',
    enginePowerHp: vehicle.specs?.enginePowerHp,
    enginePowerKw: vehicle.specs?.enginePowerKw,
    torqueNm: vehicle.specs?.torqueNm,
    cylindersCount: vehicle.specs?.cylindersCount,
    engineLayout: vehicle.specs?.engineLayout ?? '',
    turbo: vehicle.specs?.turbo,
    gearsCount: vehicle.specs?.gearsCount,
    fuelTankCapacity: vehicle.specs?.fuelTankCapacity,
    cityConsumption: vehicle.specs?.cityConsumption,
    highwayConsumption: vehicle.specs?.highwayConsumption,
    combinedConsumption: vehicle.specs?.combinedConsumption,
    batteryCapacityKwh: vehicle.specs?.batteryCapacityKwh,
    electricRangeKm: vehicle.specs?.electricRangeKm,
    accelerationSec: vehicle.specs?.accelerationSec,
    topSpeedKmh: vehicle.specs?.topSpeedKmh,
    lengthMm: vehicle.specs?.lengthMm,
    widthMm: vehicle.specs?.widthMm,
    heightMm: vehicle.specs?.heightMm,
    weightKg: vehicle.specs?.weightKg,
    wheelbaseMm: vehicle.specs?.wheelbaseMm,
    groundClearanceMm: vehicle.specs?.groundClearanceMm,
    trunkVolumeLiters: vehicle.specs?.trunkVolumeLiters,
    numberOfDoors: vehicle.specs?.numberOfDoors,
    numberOfSeats: vehicle.specs?.numberOfSeats,
    airbagsCount: vehicle.specs?.airbagsCount,
    euroStandard: vehicle.specs?.euroStandard ?? '',
    ncapRating: vehicle.specs?.ncapRating,
    co2EmissionGKm: vehicle.specs?.co2EmissionGKm,
    tireSizeFront: vehicle.specs?.tireSizeFront ?? '',
    tireSizeRear: vehicle.specs?.tireSizeRear ?? '',
  };

  const { control, handleSubmit, setError } = useForm<VehicleSpecsValues>({
    resolver,
    defaultValues,
  });

  const { mutate: update, isPending, error } = useUpdateVehicleSpecsMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: VehicleSpecsValues) => {
    update(
      { vehicleId: vehicle.id, workspaceId: vehicle.workspaceId, dto: data },
      {
        onSuccess: () => {
          showToast.success(t('vehicle.detail.editSuccess'));
          onSuccess?.();
        },
      },
    );
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
