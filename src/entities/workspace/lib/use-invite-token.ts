import { useParams } from 'react-router-dom';

type InviteTokenParams = {
  token: string;
};

export const useInviteToken = (): string => {
  const { token = '' } = useParams<InviteTokenParams>();
  return token;
};
