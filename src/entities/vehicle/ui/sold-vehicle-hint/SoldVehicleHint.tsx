import { useTranslation } from 'react-i18next';

import { Hint } from '@shared/ui';

export const SoldVehicleHint = () => {
  const { t } = useTranslation();

  return <Hint message={t('vehicle.sold.hint')} variant="warning" />;
};
