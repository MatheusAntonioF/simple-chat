import { useEffect, useState } from 'react';
import { Grid } from '@chakra-ui/react';

import { useContact } from '../../hooks/useContact';
import { IActiveContact } from '../../types/contact.types';
import { ExistentUser } from '../../types/user.types';
import { useSocket } from '../../hooks/useSocket';

import { SidebarContacts } from './Contacts';
import { Conversation } from './Conversation';

export const Dashboard = () => {
  const [contacts, setContacts] = useState<ExistentUser[]>([]);
  const [activeContact, setActiveContact] = useState<IActiveContact>(
    {} as IActiveContact
  );

  const { getAllContacts } = useContact();

  const { socket } = useSocket();

  useEffect(() => {
    async function fetchContacts() {
      const foundContacts = await getAllContacts();

      if (foundContacts) {
        setContacts(foundContacts); // remove logged user from contacts
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
