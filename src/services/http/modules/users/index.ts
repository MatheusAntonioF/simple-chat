import { api } from '../../axios';
import { IUser } from '../../../../types/user.types';
import { useToast } from '../../../../hooks/useToast';

export const useUser = () => {
  const toast = useToast();

  const createUser = async ({ name, email, password }: IUser) => {
    try {
      const { data } = await api.post('/users', {
        name,
        email,
        password,
      });

      return data;
    } catch (error) {
      console.log('🚀 ~ error', error);
      toast({
        title: 'Error to create a new user',
        description: 'Check the data and try again',
        status: 'error',
      });
    }
  };

  return { createUser };
};
