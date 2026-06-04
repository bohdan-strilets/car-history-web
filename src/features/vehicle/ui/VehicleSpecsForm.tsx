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
      submitLabel={t('common.actions.save')}
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
              label={t('vehicle.specs.fields.engineCode')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="enginePowerHp"
              label={t('vehicle.specs.fields.enginePowerHp')}
              size="lg"
              unit="hp"
            />
            <FormFieldNumberInput
              control={control}
              name="enginePowerKw"
              label={t('vehicle.specs.fields.enginePowerKw')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="torqueNm"
              label={t('vehicle.specs.fields.torqueNm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="cylindersCount"
              label={t('vehicle.specs.fields.cylindersCount')}
              size="lg"
            />
            <FormFieldInput
              control={control}
              name="engineLayout"
              label={t('vehicle.specs.fields.engineLayout')}
              size="lg"
            />
            <FormFieldCheckbox
              control={control}
              name="turbo"
              label={t('vehicle.specs.fields.turbo')}
            />
            <FormFieldNumberInput
              control={control}
              name="gearsCount"
              label={t('vehicle.specs.fields.gearsCount')}
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
              label={t('vehicle.specs.fields.fuelTankCapacity')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="cityConsumption"
              label={t('vehicle.specs.fields.cityConsumption')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="highwayConsumption"
              label={t('vehicle.specs.fields.highwayConsumption')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="combinedConsumption"
              label={t('vehicle.specs.fields.combinedConsumption')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="batteryCapacityKwh"
              label={t('vehicle.specs.fields.batteryCapacityKwh')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="electricRangeKm"
              label={t('vehicle.specs.fields.electricRangeKm')}
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
              label={t('vehicle.specs.fields.accelerationSec')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="topSpeedKmh"
              label={t('vehicle.specs.fields.topSpeedKmh')}
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
              label={t('vehicle.specs.fields.lengthMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="widthMm"
              label={t('vehicle.specs.fields.widthMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="heightMm"
              label={t('vehicle.specs.fields.heightMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="weightKg"
              label={t('vehicle.specs.fields.weightKg')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="wheelbaseMm"
              label={t('vehicle.specs.fields.wheelbaseMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="groundClearanceMm"
              label={t('vehicle.specs.fields.groundClearanceMm')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="trunkVolumeLiters"
              label={t('vehicle.specs.fields.trunkVolumeLiters')}
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
              label={t('vehicle.specs.fields.numberOfDoors')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="numberOfSeats"
              label={t('vehicle.specs.fields.numberOfSeats')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="airbagsCount"
              label={t('vehicle.specs.fields.airbagsCount')}
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
              label={t('vehicle.specs.fields.euroStandard')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="ncapRating"
              label={t('vehicle.specs.fields.ncapRating')}
              size="lg"
            />
            <FormFieldNumberInput
              control={control}
              name="co2EmissionGKm"
              label={t('vehicle.specs.fields.co2EmissionGKm')}
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
              label={t('vehicle.specs.fields.tireSizeFront')}
              size="lg"
            />
            <FormFieldInput
              control={control}
              name="tireSizeRear"
              label={t('vehicle.specs.fields.tireSizeRear')}
              size="lg"
            />
          </Stack>
        </Stack>
      </Stack>
    </Form>
  );
};
