import { Flex, ListItem } from '@chakra-ui/react';

interface IMessageProps {
  message: string;
  isSender: boolean;
}

export const Message = ({ message, isSender }: IMessageProps): JSX.Element => {
  return (
    <ListItem
      display="flex"
      w="full"
      justifyContent={isSender ? 'flex-end' : 'flex-start'}
    >
      <Flex bg="gray.200" p={2} borderRadius="md">
        {message}
      </Flex>
    </ListItem>
  );
};
