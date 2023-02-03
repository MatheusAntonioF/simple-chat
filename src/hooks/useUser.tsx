import { useCallback, useMemo } from 'react';

import { api } from '../services/http/axios';
import { ExistentUser, ICreateUser, IUser } from '../types/user.types';

import { useToast } from './useToast';

export const useUser = () => {
  const toast = useToast();

  const createUser = useCallback(
    async ({ name, email, password }: IUser) => {
      try {
        const { data } = await api.post<ExistentUser>('/users', {
          name,
          email,
          password,
        });

        return data;
      } catch (error) {
        toast({
          title: 'Error to create a new user',
          description: 'Check the data and try again',
          status: 'error',
        });
      }
    },
    [toast]
  );

  const getMeProfile = useCallback(async () => {
    try {
      const { data } = await api.get<ExistentUser>('/me');

      return data;
    } catch (error) {
      toast({
        title: 'Error to create a new user',
        description: 'Check the data and try again',
        status: 'error',
      });
    }
  }, [toast]);

  const updateLoggedUser = useCallback(
    async (updateData: Partial<ICreateUser>) => {
      try {
        await api.put<ExistentUser>('/users', updateData);

        toast({
          title: 'Profile updated successfully',
          status: 'success',
        });
      } catch (error) {
        toast({
          title: 'Error to create a new user',
          description: 'Check the data and try again',
          status: 'error',
        });
      }
    },
    [toast]
  );

  const memoized = useMemo(
    () => ({ getMeProfile, createUser, updateLoggedUser }),
    [getMeProfile, createUser, updateLoggedUser]
  );

  return memoized;
};
