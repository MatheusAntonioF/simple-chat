import { useCallback, useMemo } from 'react';

import { api } from '../services/http/axios';
import { ExistentUser } from '../types/user.types';

import { useToast } from './useToast';

export const useContact = () => {
  const toast = useToast();

  const getAllContacts = useCallback(async () => {
    try {
      const { data } = await api.get<ExistentUser[]>('/users');

      return data;
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error to get contacts',
        status: 'error',
      });
    }
  }, [toast]);

  const memoized = useMemo(() => ({ getAllContacts }), [getAllContacts]);

  return memoized;
};
