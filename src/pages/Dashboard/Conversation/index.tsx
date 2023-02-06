import { Flex, Heading, Input, List, ListItem } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Socket } from 'socket.io-client';

import { useAuth } from '../../../hooks/useAuth';
import { useConversation } from '../../../hooks/useConversation';
import { useToast } from '../../../hooks/useToast';
import { IActiveContact } from '../../../types/contact.types';
import { IConversation } from '../../../types/conversation.types';

interface IConversationProps {
  activeContact: IActiveContact | null;
  socket: Socket | null;
}
interface IMessageProps {
  message: string;
}

export const Conversation = ({
  activeContact,
  socket,
}: IConversationProps): JSX.Element => {
  const [conversation, setConversation] = useState<IConversation[]>([]);
  const { register, handleSubmit } = useForm<IMessageProps>();

  const { loggedUser } = useAuth();
  const { getOneConversation, createNewMessage } = useConversation();

  const toast = useToast();

  useEffect(() => {
    async function fetchConversation() {
      if (!activeContact?.id) return;

      const foundConversation = await getOneConversation({
        senderId: loggedUser.id,
        receiverId: activeContact.id,
      });

      if (foundConversation) {
        setConversation(foundConversation);
      }
    }

    fetchConversation();
  }, [getOneConversation, activeContact, loggedUser]);

  useEffect(() => {
    if (!socket) return;

    socket.on('new_message', message => {
      if (!activeContact) return;

      const parsedMessage = JSON.parse(message) as IConversation;

      if (parsedMessage.sender === activeContact.id) {
        setConversation(prevConversation => [
          ...prevConversation,
          parsedMessage,
        ]);
      }
    });
  }, [socket, activeContact]);

  const onSubmit = useCallback(
    async ({ message }: IMessageProps) => {
      try {
        if (!activeContact?.id) return;

        const newMessage = await createNewMessage({
          receiver_id: activeContact?.id,
          message,
        });

        if (newMessage) {
          setConversation(prevConversation => [
            ...prevConversation,
            newMessage,
          ]);
        }
      } catch (error) {
        toast({ title: 'Failed to send message', status: 'error' });
      }
    },
    [toast, createNewMessage, activeContact]
  );

  return (
    <Flex bg="pink" flexDir="column">
      <Flex bg="blue" w="full">
        <Heading>{activeContact?.name}</Heading>
      </Flex>

      <Flex flexDir="column" bg="red" h="full" justifyContent="space-between">
        <Flex bg="green" flexGrow={1} p={5}>
          <List spacing={3}>
            {conversation.map(({ id, message }) => {
              return <ListItem key={id}>{message}</ListItem>;
            })}
          </List>
        </Flex>
        <Flex as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Type a new message" {...register('message')} />
        </Flex>
      </Flex>
    </Flex>
  );
};
