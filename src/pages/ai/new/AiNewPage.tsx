import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useVehiclesQuery } from '@entities/vehicle';
import { useWorkspaceId } from '@entities/workspace';
import { useCreateConversationMutation } from '@features/ai-chat';
import { ROUTES } from '@shared/config';
import { showToast } from '@shared/lib';
import { Button, CardSelect, Stack, Textarea } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

export const AiNewPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const workspaceId = useWorkspaceId();

  const { data: vehiclesData } = useVehiclesQuery(workspaceId);
  const vehicles = vehiclesData?.data ?? [];

  const [selectedVehicleId, setSelectedVehicleId] = useState<(string | number)[]>([]);
  const [message, setMessage] = useState('');

  const { mutate: createConversation, isPending } = useCreateConversationMutation();

  const vehicleOptions = vehicles.map((vehicle) => ({
    id: vehicle.id,
    value: vehicle.id,
    label: vehicle.nickname || `${vehicle.brand} ${vehicle.model}`,
    description: `${vehicle.year}`,
    icon: 'car' as const,
  }));

  const handleStart = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const vehicleId = selectedVehicleId[0] ? String(selectedVehicleId[0]) : undefined;

    createConversation(
      { vehicleId },
      {
        onSuccess: (conversation) => {
          navigate(ROUTES.AI.DETAIL(conversation.data.id), {
            state: { initialMessage: trimmed },
          });
        },
        onError: () => {
          showToast.error(t('errors.AI_MESSAGE_FAILED'));
        },
      },
    );
  };

  return (
    <Stack gap="3xl">
      <PageHeader
        title={t('ai.new.title')}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.AI.ROOT)}
      />

      {vehicleOptions.length > 0 && (
        <Stack gap="md">
          <CardSelect
            options={vehicleOptions}
            value={selectedVehicleId}
            onChange={setSelectedVehicleId}
            maxSelect={1}
          />
        </Stack>
      )}

      <Stack gap="md">
        <Textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={t('ai.chat.inputPlaceholder')}
          maxRows={6}
        />
        <Button onClick={handleStart} disabled={!message.trim() || isPending} loading={isPending}>
          {t('ai.new.start')}
        </Button>
      </Stack>
    </Stack>
  );
};
