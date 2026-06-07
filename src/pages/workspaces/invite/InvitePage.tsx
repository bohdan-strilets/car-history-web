import { useInviteQuery, useInviteToken } from '@entities/workspace';
import {
  useWorkspace,
  WORKSPACE_INVITE_STATUS,
  WORKSPACE_TYPE_CONFIG,
} from '@entities/workspace/model';
import {
  InviteAcceptedState,
  InviteAlreadyAcceptedState,
  InviteLoadingState,
  InviteNotFoundState,
  InviteRejectedOrExpiredState,
  useAcceptInviteMutation,
  useRejectInviteMutation,
} from '@features/workspace';
import { ROUTES } from '@shared/config';
import { Button, Center, Heading, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const InvitePage = () => {
  const [isAcceptedSuccess, setIsAcceptedSuccess] = useState(false);
  const [redirectWorkspaceId, setRedirectWorkspaceId] = useState<string | null>(null);

  const { t } = useTranslation();
  const { setActiveWorkspace, setActiveWorkspaceId } = useWorkspace();
  const navigate = useNavigate();
  const token = useInviteToken();

  const { data, isPending, isError } = useInviteQuery(token ?? '');
  const { mutate: accept, isPending: isAccepting } = useAcceptInviteMutation();
  const { mutate: reject, isPending: isRejecting } = useRejectInviteMutation();

  const invite = data?.data;
  const REDIRECT_DELAY = 2000;

  useEffect(() => {
    if (!isAcceptedSuccess || !redirectWorkspaceId) return;

    const timer = setTimeout(() => {
      navigate(ROUTES.WORKSPACES.DETAIL(redirectWorkspaceId));
    }, REDIRECT_DELAY);

    return () => clearTimeout(timer);
  }, [isAcceptedSuccess, redirectWorkspaceId, navigate]);

  if (isPending) return <InviteLoadingState />;
  if (isError || !invite) return <InviteNotFoundState />;
  if (isAcceptedSuccess) return <InviteAcceptedState />;

  const typeConfig = getConfigOption(t, WORKSPACE_TYPE_CONFIG, invite.workspace.type);

  const isAlreadyAccepted = invite.status === WORKSPACE_INVITE_STATUS.ACCEPTED;
  const isRejected = invite.status === WORKSPACE_INVITE_STATUS.REJECTED;
  const isExpired = invite.status === WORKSPACE_INVITE_STATUS.EXPIRED;

  if (isAlreadyAccepted) return <InviteAlreadyAcceptedState />;
  if (isRejected || isExpired) return <InviteRejectedOrExpiredState />;

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
