import { useEffect, useState } from 'react';
import { Grid } from '@chakra-ui/react';

import { useContact } from '../../hooks/useContact';
import { IActiveContact, IContact } from '../../types/contact.types';
import { useSocket } from '../../hooks/useSocket';

import { SidebarContacts } from './Contacts';
import { Conversation } from './Conversation';

export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [activeContact, setActiveContact] = useState<IActiveContact>(
    {} as IActiveContact
  );

  const { getAllContacts } = useContact();

  const { socket } = useSocket();

  useEffect(() => {
    async function fetchContacts() {
      const foundContacts = await getAllContacts();

      if (foundContacts) {
        setContacts(foundContacts);
      }
    }

    fetchContacts();
  }, [getAllContacts]);

  return (
    <Grid templateColumns="350px 1fr" w="100%" h="calc(100% - 64px)">
      <SidebarContacts
        contacts={contacts}
        setActiveContact={setActiveContact}
      />

      <Conversation activeContact={activeContact} socket={socket} />
    </Grid>
  );
};
