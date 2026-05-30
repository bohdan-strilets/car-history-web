import { useInviteQuery } from '@entities/workspace';
import {
  useWorkspace,
  WORKSPACE_INVITE_STATUS,
  WORKSPACE_TYPE_CONFIG,
} from '@entities/workspace/model';
import { useAcceptInviteMutation, useRejectInviteMutation } from '@features/workspace';
import { ROUTES } from '@shared/config';
import type { TokenParams } from '@shared/types';
import {
  Button,
  Center,
  Heading,
  IconBox,
  Panel,
  Spinner,
  Stack,
  SuccessState,
  Text,
} from '@shared/ui';
import { StateView } from '@shared/ui/components/state-view';
import { getConfigOption } from '@shared/utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export const InvitePage = () => {
  const [isAcceptedSuccess, setIsAcceptedSuccess] = useState(false);
  const [redirectWorkspaceId, setRedirectWorkspaceId] = useState<string | null>(null);

  const { t } = useTranslation();
  const { token } = useParams<TokenParams>();
  const { setActiveWorkspace, setActiveWorkspaceId } = useWorkspace();
  const navigate = useNavigate();

  const { data, isPending, isError } = useInviteQuery(token ?? '');
  const { mutate: accept, isPending: isAccepting } = useAcceptInviteMutation();
  const { mutate: reject, isPending: isRejecting } = useRejectInviteMutation();

  useEffect(() => {
    if (!isAcceptedSuccess || !redirectWorkspaceId) return;

    const timer = setTimeout(() => {
      navigate(ROUTES.WORKSPACES.DETAIL(redirectWorkspaceId));
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAcceptedSuccess, redirectWorkspaceId, navigate]);

  const invite = data?.data;

  if (isPending)
    return (
      <Center fullHeight fullWidth>
        <Panel gap="xl" p="3xl" align="center" maxWidth="page" width="full">
          <Spinner size="xl" />
          <Text>{t('workspace.invite.loading.title')}</Text>
        </Panel>
      </Center>
    );

  if (isError || !invite)
    return (
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('workspace.invite.notFound.title')}
        description={t('workspace.invite.notFound.description')}
        actionLabel={t('workspace.invite.notFound.action')}
        onAction={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />
    );

  if (isAcceptedSuccess) {
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
  }

  const typeConfig = getConfigOption(t, WORKSPACE_TYPE_CONFIG, invite.workspace.type);

  const isAlreadyAccepted = invite.status === WORKSPACE_INVITE_STATUS.ACCEPTED;
  const isRejected = invite.status === WORKSPACE_INVITE_STATUS.REJECTED;
  const isExpired = invite.status === WORKSPACE_INVITE_STATUS.EXPIRED;

  if (isAlreadyAccepted) {
    return (
      <StateView
        icon="checkCircle"
        variant="success"
        title={t('workspace.invite.alreadyAccepted.title')}
        description={t('workspace.invite.alreadyAccepted.description')}
        actionLabel={t('workspace.invite.alreadyAccepted.action')}
        onAction={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />
    );
  }

  if (isRejected || isExpired) {
    return (
      <StateView
        icon="calendarX"
        variant="error"
        title={t('workspace.invite.expired.title')}
        description={t('workspace.invite.expired.description')}
        actionLabel={t('workspace.invite.expired.action')}
        onAction={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />
    );
  }

  const handleAccept = () => {
    if (!token) return;

    accept(token, {
      onSuccess: (response) => {
        setActiveWorkspaceId(response.data.id);
        setActiveWorkspace(response.data);
        setRedirectWorkspaceId(response.data.id);
        setIsAcceptedSuccess(true);
      },
    });
  };

  const handleReject = () => {
    if (!token) return;
    reject(token, {
      onSuccess: () => navigate(ROUTES.WORKSPACES.ROOT),
    });
  };

  return (
    <Center fullHeight fullWidth>
      <Panel gap="xl" p="3xl" align="center" maxWidth="page" width="full">
        <IconBox
          size="3xl"
          name={typeConfig?.icon ?? 'circleQuestionMark'}
          soft={typeConfig?.color ?? 'gray'}
        />

        <Stack align="center" gap="sm">
          <Heading size="2xl">{t('workspace.invite.title')}</Heading>
          <Text color="secondary" align="center">
            {t('workspace.invite.description', { name: invite.workspace.name })}
          </Text>
        </Stack>

        <Stack direction="row" gap="md" justify="center">
          <Button variant="ghost" color="gray" onClick={handleReject} loading={isRejecting}>
            {t('workspace.invite.reject')}
          </Button>
          <Button onClick={handleAccept} loading={isAccepting}>
            {t('workspace.invite.accept')}
          </Button>
        </Stack>
      </Panel>
    </Center>
  );
};
