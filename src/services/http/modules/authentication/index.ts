import { useToast } from '../../../../hooks/useToast';
import { IAuthCredentials, ILoggedUser } from '../../../../types/auth.types';
import { api } from '../../axios';

export const useInternalAuth = () => {
  const toast = useToast();

  const authenticateUser = async ({
    email,
    password,
  }: IAuthCredentials): Promise<ILoggedUser | undefined> => {
    try {
      const { data } = await api.post<ILoggedUser>('/session', {
        email,
        password,
      });

      return data;
    } catch (error) {
      toast({
        title: 'Error to authenticate.',
        description: 'Check the credentials and try again',
        status: 'error',
      });
    }
  };

  return { authenticateUser };
};
