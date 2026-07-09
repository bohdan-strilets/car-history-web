import { useTranslation } from 'react-i18next';

import { Center, StateView } from '@shared/ui';

import type { GalleryEmptyProps } from './vehicle-state.types';

export const GalleryEmpty = ({ onAction, isSold }: GalleryEmptyProps) => {
  const { t } = useTranslation();

  return (
    <Center style={{ flex: '1' }}>
      <StateView
        icon="images"
        title={t('media.gallery.empty.title')}
        description={t('media.gallery.empty.description')}
        actionLabel={t('media.gallery.add')}
        onAction={isSold ? undefined : onAction}
      />
    </Center>
  );
};
