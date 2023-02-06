import React from 'react';
import { Box, List } from '@chakra-ui/react';

import { IActiveContact, IContact } from '../../../types/contact.types';

import { Contact } from './Contact';

interface ISidebarContactProps {
  contacts: IContact[];
  setActiveContact: React.Dispatch<React.SetStateAction<IActiveContact>>;
}

export const SidebarContacts = ({
  contacts,
  setActiveContact,
}: ISidebarContactProps): JSX.Element => {
  return (
    <Box h="full" bg="gray.100" pt={2}>
      <List borderRight="1px" w="full" p="1" h="full" spacing={3}>
        {contacts.map(({ id, name, message: lastMessage }) => (
          <Contact
            key={id}
            setActiveChat={() =>
              setActiveContact({
                id,
                name,
              })
            } // add useCallback here
            contactName={name}
            lastMessage={lastMessage}
          />
        ))}
      </List>
    </Box>
  );
};
