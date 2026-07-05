import { useTranslation } from 'react-i18next';

import type { Tire } from '@entities/tire';
import { TireList, useTiresQuery } from '@entities/tire';
import { useOpenCreateTire, useOpenTireDetail } from '@features/tire';
import { Center, Stack, StateView } from '@shared/ui';
import { PageHeader, PageHeaderSkeleton } from '@widgets/page-header';

import type { TiresTabProps } from './vehicle-tabs.types';

export const TiresTab = ({ workspaceId, vehicleId }: TiresTabProps) => {
  const { t } = useTranslation();

  const { data, isPending, isError } = useTiresQuery(workspaceId, vehicleId);
  const { handleCreate } = useOpenCreateTire({ workspaceId, vehicleId });
  const { handleOpen } = useOpenTireDetail({ workspaceId, vehicleId });

  const tires: Tire[] = data?.data ?? [];
  const isEmpty = tires.length === 0;

  if (isPending) return <PageHeaderSkeleton />;

  if (isError)
    return (
      <Center style={{ flex: '1' }}>
        <StateView
          icon="alertCircle"
          variant="error"
          title={t('common.error.title')}
          description={t('common.error.description')}
        />
      </Center>
    );

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('tire.list.title')}
        buttonLabel={t('tire.actions.add')}
        buttonIcon="plus"
        onCreate={handleCreate}
      />

      {isEmpty ? (
        <Center style={{ flex: '1' }}>
          <StateView
            icon="circle"
            title={t('tire.empty.title')}
            description={t('tire.empty.description')}
            actionLabel={t('tire.empty.action')}
            onAction={handleCreate}
          />
        </Center>
      ) : (
        <TireList tires={tires} onTireClick={handleOpen} />
      )}
    </Stack>
  );
};
