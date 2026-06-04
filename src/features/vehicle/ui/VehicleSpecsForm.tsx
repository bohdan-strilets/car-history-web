import {
  Form,
  FormFieldCheckbox,
  FormFieldInput,
  FormFieldNumberInput,
  Stack,
  Text,
} from '@shared/ui';
import { useTranslation } from 'react-i18next';

import type { VehicleSpecsFormProps } from '../model';

export const VehicleSpecsForm = ({
  control,
  handleSubmit,
  isPending,
  errorMessage,
}: VehicleSpecsFormProps) => {
  const { t } = useTranslation();

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Stack gap="3xl">
        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('vehicle.specs.sections.engine')}
          </Text>
          <Stack gap="md">
            <FormFieldInput
              control={control}
              name="engineCode"
              label={t('vehicle.specs.engineCode')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="enginePowerHp"
              label={t('vehicle.specs.enginePowerHp')}
              size="lg"
              unit="hp"
            />
            <FormFieldNumberInput
              control={control}
              name="enginePowerKw"
              label={t('vehicle.specs.enginePowerKw')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="torqueNm"
              label={t('vehicle.specs.torqueNm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="cylindersCount"
              label={t('vehicle.specs.cylindersCount')}
              size="lg"
            />
            <FormFieldInput
              control={control}
              name="engineLayout"
              label={t('vehicle.specs.engineLayout')}
              size="lg"
            />
            <FormFieldCheckbox control={control} name="turbo" label={t('vehicle.specs.turbo')} />
            <FormFieldNumberInput
              control={control}
              name="gearsCount"
              label={t('vehicle.specs.gearsCount')}
              size="lg"
            />
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('vehicle.specs.sections.consumption')}
          </Text>
          <Stack gap="md">
            <FormFieldNumberInput
              control={control}
              name="fuelTankCapacity"
              label={t('vehicle.specs.fuelTankCapacity')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="cityConsumption"
              label={t('vehicle.specs.cityConsumption')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="highwayConsumption"
              label={t('vehicle.specs.highwayConsumption')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="combinedConsumption"
              label={t('vehicle.specs.combinedConsumption')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="batteryCapacityKwh"
              label={t('vehicle.specs.batteryCapacityKwh')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="electricRangeKm"
              label={t('vehicle.specs.electricRangeKm')}
              size="lg"
            />
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('vehicle.specs.sections.performance')}
          </Text>
          <Stack gap="md">
            <FormFieldNumberInput
              control={control}
              name="accelerationSec"
              label={t('vehicle.specs.accelerationSec')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="topSpeedKmh"
              label={t('vehicle.specs.topSpeedKmh')}
              size="lg"
            />
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('vehicle.specs.sections.dimensions')}
          </Text>
          <Stack gap="md">
            <FormFieldNumberInput
              control={control}
              name="lengthMm"
              label={t('vehicle.specs.lengthMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="widthMm"
              label={t('vehicle.specs.widthMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="heightMm"
              label={t('vehicle.specs.heightMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="weightKg"
              label={t('vehicle.specs.weightKg')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="wheelbaseMm"
              label={t('vehicle.specs.wheelbaseMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="groundClearanceMm"
              label={t('vehicle.specs.groundClearanceMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="trunkVolumeLiters"
              label={t('vehicle.specs.trunkVolumeLiters')}
              size="lg"
            />
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('vehicle.specs.sections.interior')}
          </Text>
          <Stack gap="md">
            <FormFieldNumberInput
              control={control}
              name="numberOfDoors"
              label={t('vehicle.specs.numberOfDoors')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="numberOfSeats"
              label={t('vehicle.specs.numberOfSeats')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="airbagsCount"
              label={t('vehicle.specs.airbagsCount')}
              size="lg"
            />
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('vehicle.specs.sections.safetyEco')}
          </Text>
          <Stack gap="md">
            <FormFieldInput
              control={control}
              name="euroStandard"
              label={t('vehicle.specs.euroStandard')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="ncapRating"
              label={t('vehicle.specs.ncapRating')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="co2EmissionGKm"
              label={t('vehicle.specs.co2EmissionGKm')}
              size="lg"
            />
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('vehicle.specs.sections.tires')}
          </Text>
          <Stack gap="md">
            <FormFieldInput
              control={control}
              name="tireSizeFront"
              label={t('vehicle.specs.tireSizeFront')}
              size="lg"
            />
            <FormFieldInput
              control={control}
              name="tireSizeRear"
              label={t('vehicle.specs.tireSizeRear')}
              size="lg"
            />
          </Stack>
        </Stack>
      </Stack>
    </Form>
  );
};
