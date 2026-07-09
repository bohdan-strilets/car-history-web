import { useTranslation } from 'react-i18next';

import type { Tire } from '@entities/tire';
import { TireList, TireListSkeleton, useTiresQuery } from '@entities/tire';
import { useOpenCreateTire, useOpenTireDetail } from '@features/tire';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import { TabsError, TiresEmpty } from '../vehicle-state';

import type { TiresTabProps } from './vehicle-tabs.types';

export const TiresTab = ({ workspaceId, vehicleId, isSold }: TiresTabProps) => {
  const { t } = useTranslation();

  const { data, isPending, isError, refetch } = useTiresQuery(workspaceId, vehicleId);
  const { handleCreate } = useOpenCreateTire({ workspaceId, vehicleId });
  const { handleOpen } = useOpenTireDetail({ vehicleId });

  const tires: Tire[] = data?.data ?? [];
  const isEmpty = tires.length === 0;

  if (isPending) return <TireListSkeleton />;
  if (isError) return <TabsError onAction={refetch} />;
  if (isEmpty) return <TiresEmpty onAction={handleCreate} isSold={isSold} />;

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('tire.list.title')}
        buttonLabel={t('tire.actions.add')}
        buttonIcon="plus"
        onCreate={handleCreate}
      />

      <TireList tires={tires} onTireClick={handleOpen} />
    </Stack>
  );
};
