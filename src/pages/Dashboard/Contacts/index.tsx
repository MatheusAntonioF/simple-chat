import React from 'react';
import { Box } from '@chakra-ui/react';

import { ExistentUser } from '../../../types/user.types';
import { IActiveContact } from '../../../types/contact.types';

import { Contact } from './Contact';

interface ISidebarContactProps {
  contacts: ExistentUser[];
  setActiveContact: React.Dispatch<React.SetStateAction<IActiveContact>>;
}

export const SidebarContacts = ({
  contacts,
  setActiveContact,
}: ISidebarContactProps): JSX.Element => {
  return (
    <Box h="full" bg="gray.100" gap={2}>
      <Box borderRight="1px" w="full" p="2" h="full">
        {contacts.map(({ id, name }) => (
          <Contact
            key={id}
            setActiveChat={() =>
              setActiveContact({
                id,
                name,
              })
            } // add useCallback here
            contactName={name}
            lastMessage="last message"
          />
        ))}
      </Box>
    </Box>
  );
};
