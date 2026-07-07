import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { SERVICE_STATION_TYPE_CONFIG, useServiceStationQuery } from '@entities/service-station';
import { useDeleteServiceStationMutation } from '@features/service-station';
import { ROUTES } from '@shared/config';
import { useConfirmModal } from '@shared/lib/modal';
import {
  Badge,
  Button,
  Center,
  Heading,
  IconBox,
  InfoRow,
  Stack,
  StateView,
  Text,
} from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';
import { PageHeader, PageHeaderSkeleton } from '@widgets/page-header';

export const ServiceStationDetailPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { confirm } = useConfirmModal();

  const { data, isPending, isError } = useServiceStationQuery(id ?? '');
  const deleteMutation = useDeleteServiceStationMutation();

  const station = data?.data;

  const typeConfig = station
    ? getConfigOption(t, SERVICE_STATION_TYPE_CONFIG, station.type)
    : undefined;

  const handleDelete = () => {
    if (!station) return;
    confirm(
      {
        title: t('serviceStation.actions.delete'),
        description: t('serviceStation.actions.deleteConfirm'),
        confirmLabel: t('common.actions.delete'),
        cancelLabel: t('common.actions.cancel'),
        danger: true,
      },
      {
        onConfirm: (done) => {
          deleteMutation.mutate(station.id, {
            onSuccess: () => {
              done();
              navigate(ROUTES.SERVICE_STATIONS.ROOT);
            },
          });
        },
      },
    );
  };

  if (isPending) return <PageHeaderSkeleton />;

  if (isError || !station)
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
        title={station.name}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.SERVICE_STATIONS.ROOT)}
      />

      <Stack direction="row" align="center" gap="xl">
        <IconBox name={typeConfig?.icon ?? 'wrench'} size="2xl" soft={typeConfig?.color} />
        <Stack gap="xs">
          <Heading size="xl">{station.name}</Heading>
          <Badge soft={typeConfig?.color}>{typeConfig?.label}</Badge>
        </Stack>
      </Stack>

      <InfoSection title={t('fields.address')}>
        <InfoRow
          label={t('serviceStation.fields.city')}
          icon="mapPin"
          value={`${station.address.street} ${station.address.number}, ${station.address.city}`}
          bottomDivider={!!station.phone}
        />
        {station.phone && (
          <InfoRow
            label={t('fields.phone')}
            icon="phone"
            value={station.phone}
            bottomDivider={!!station.website}
          />
        )}
        {station.website && (
          <InfoRow label={t('fields.website')} icon="globe" value={station.website} />
        )}
      </InfoSection>

      {station.notes && (
        <InfoSection title={t('fields.notes')}>
          <Text size="sm">{station.notes}</Text>
        </InfoSection>
      )}

      <Stack direction="row" gap="md">
        <Badge soft="gray">
          {t('serviceStation.counts.visits', { count: station.visitCount })}
        </Badge>
      </Stack>

      <Button
        type="button"
        leftIcon="edit"
        size="md"
        variant="soft"
        color="gray"
        fullWidth
        onClick={() => navigate(ROUTES.SERVICE_STATIONS.EDIT(station.id))}
      >
        {t('common.actions.edit')}
      </Button>

      <Button
        type="button"
        leftIcon="trash"
        size="sm"
        variant="soft"
        color="danger"
        onClick={handleDelete}
      >
        {t('serviceStation.actions.delete')}
      </Button>
    </Stack>
  );
};
