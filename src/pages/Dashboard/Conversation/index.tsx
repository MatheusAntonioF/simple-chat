import { useCallback, useEffect, useState } from 'react';
import { Flex, Heading, Input, List, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Socket } from 'socket.io-client';
import { AiOutlineSend } from 'react-icons/ai';

import { useAuth } from '../../../hooks/useAuth';
import { useConversation } from '../../../hooks/useConversation';
import { useToast } from '../../../hooks/useToast';
import { IActiveContact, IContact } from '../../../types/contact.types';
import { IConversation } from '../../../types/conversation.types';

import { Message } from './Message';

interface IConversationProps {
  activeContact: IActiveContact | null;
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  socket: Socket | null;
}
interface IMessageProps {
  message: string;
}

export const Conversation = ({
  activeContact,
  setContacts,
  socket,
}: IConversationProps): JSX.Element => {
  const [conversation, setConversation] = useState<IConversation[]>([]);
  const { register, handleSubmit, reset } = useForm<IMessageProps>();

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
        console.log('added new message -> useEffect');

        setConversation(prevConversation => [
          ...prevConversation,
          parsedMessage,
        ]);
      }

      setContacts(prevContacts => {
        return prevContacts.map(contact => {
          if (parsedMessage.sender === contact.id) {
            return {
              ...contact,
              message: parsedMessage.message,
            };
          }
          return contact;
        });
      });
    });
  }, [socket, activeContact, setContacts]);

  const onSubmit = useCallback(
    async ({ message }: IMessageProps) => {
      try {
        if (!activeContact?.id) return;

        const newMessage = await createNewMessage({
          receiver_id: activeContact?.id,
          message,
        });

        if (!newMessage) return;

        setConversation(prevConversation => [...prevConversation, newMessage]);

        console.log('added new message -> onSubmit', newMessage);

        setContacts(prevContacts => {
          return prevContacts.map(contact => {
            if (newMessage.receiver === contact.id) {
              return {
                ...contact,
                message: newMessage.message,
              };
            }
            return contact;
          });
        });

        reset({ message: '' });
      } catch (error) {
        toast({ title: 'Failed to send message', status: 'error' });
      }
    },
    [toast, createNewMessage, reset, setContacts, activeContact]
  );

  return (
    <Flex flexDir="column" h="full">
      {activeContact?.id ? (
        <>
          <Flex bg="gray.200" w="full" p={5}>
            <Heading>{activeContact?.name}</Heading>
          </Flex>
          <Flex
            flexDir="column"
            h="calc(100% - 84px)"
            justifyContent="space-between"
          >
            <List
              spacing={3}
              w="full"
              p={5}
              px={6}
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '5px',
                  height: '2px',
                },
                '&::-webkit-scrollbar-button': {
                  width: '0px',
                  height: '0px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#e1e1e1',
                  border: '0px none #ffffff',
                  'border-radius': '50px',
                },
              }}
            >
              {conversation.map(({ id, message, sender }) => {
                const isSender = sender === loggedUser.id;

                return (
                  <Message key={id} message={message} isSender={isSender} />
                );
              })}
            </List>
            <Flex
              bottom={0}
              w="full"
              as="form"
              bg="gray.200"
              h={20}
              p={5}
              justifyContent="space-between"
              alignItems="center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                placeholder="Type a new message"
                bg="white"
                {...register('message')}
              />

              <Button type="submit" ml={2}>
                <AiOutlineSend />
              </Button>
            </Flex>
          </Flex>
        </>
      ) : (
        <Heading>Selecione um chat</Heading>
      )}
    </Flex>
  );
};
