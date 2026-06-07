import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { Center, Heading, Panel, Spinner, Stack, StateView, SuccessState, Text } from '@shared/ui';

// Loading state when fetching invite data

export const InviteLoadingState = () => {
  const { t } = useTranslation();

  return (
    <Center fullHeight fullWidth>
      <Panel gap="xl" p="3xl" align="center" maxWidth="page" width="full">
        <Spinner size="xl" />
        <Text>{t('workspace.invite.states.loading.title')}</Text>
      </Panel>
    </Center>
  );
};

// Error state when invite is not found or an error occurs

export const InviteNotFoundState = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StateView
      icon="alertCircle"
      variant="error"
      title={t('workspace.invite.states.notFound.title')}
      description={t('workspace.invite.states.notFound.description')}
      actionLabel={t('workspace.invite.states.notFound.action')}
      onAction={() => navigate(ROUTES.WORKSPACES.ROOT)}
    />
  );
};

// State shown after successfully accepting the invite

export const InviteAcceptedState = () => {
  const { t } = useTranslation();

  return (
    <Center fullHeight fullWidth>
      <Panel gap="xl" p="3xl" align="center" maxWidth="page" width="full">
        <SuccessState />
        <Stack align="center" gap="sm">
          <Heading size="2xl">{t('workspace.invite.acceptSuccess')}</Heading>
          <Text color="secondary" align="center">
            {t('workspace.invite.redirecting')}
          </Text>
        </Stack>
      </Panel>
    </Center>
  );
};

// State shown when the invite has already been accepted by the user

export const InviteAlreadyAcceptedState = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StateView
      icon="checkCircle"
      variant="success"
      title={t('workspace.invite.states.alreadyAccepted.title')}
      description={t('workspace.invite.states.alreadyAccepted.description')}
      actionLabel={t('workspace.invite.states.alreadyAccepted.action')}
      onAction={() => navigate(ROUTES.WORKSPACES.ROOT)}
    />
  );
};

// State shown when the invite has been rejected or expired

export const InviteRejectedOrExpiredState = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StateView
      icon="calendarX"
      variant="error"
      title={t('workspace.invite.states.expired.title')}
      description={t('workspace.invite.states.expired.description')}
      actionLabel={t('workspace.invite.states.expired.action')}
      onAction={() => navigate(ROUTES.WORKSPACES.ROOT)}
    />
  );
};
