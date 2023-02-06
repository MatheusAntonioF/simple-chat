import { useCallback, useMemo } from 'react';

import { api } from '../services/http/axios';
import { IConversation } from '../types/conversation.types';

import { useToast } from './useToast';

interface IGetOneConversationProps {
  receiverId: number;
  senderId: number;
}

interface ICreateMessageProps {
  receiver_id: number;
  message: string;
}

export const useConversation = () => {
  const toast = useToast();

  const getOneConversation = useCallback(
    async ({ receiverId, senderId }: IGetOneConversationProps) => {
      try {
        const { data } = await api.get<IConversation[]>(
          `/users/${receiverId}/conversation`,
          { headers: { sender_id: senderId } }
        );

        return data;
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error to get contacts',
          status: 'error',
        });
      }
    },
    [toast]
  );

  const createNewMessage = useCallback(
    async ({ receiver_id, message }: ICreateMessageProps) => {
      try {
        const { data } = await api.post<IConversation>(
          `/conversations/${receiver_id}`,
          {
            message,
          }
        );

        return data;
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error to send message',
          status: 'error',
        });
      }
    },
    [toast]
  );

  const memoized = useMemo(
    () => ({ getOneConversation, createNewMessage }),
    [getOneConversation, createNewMessage]
  );

  return memoized;
};
