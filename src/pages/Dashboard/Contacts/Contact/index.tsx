import { Button, Flex, Text } from '@chakra-ui/react';

interface IContractProps {
  setActiveChat: () => void;
  contactName: string;
  lastMessage?: string | undefined | null;
}

export const Contact = ({
  contactName,
  lastMessage,
  setActiveChat,
}: IContractProps): JSX.Element => {
  return (
    <Button
      variant="ghost"
      w="full"
      flex="1"
      justifyContent="flex-start"
      cursor="pointer"
      onClick={setActiveChat}
      _hover={{
        bg: 'gray.300',
      }}
    >
      <Flex flexDir="column" alignItems="flex-start">
        <Text>{contactName}</Text>
        <Text>{lastMessage}</Text>
      </Flex>
    </Button>
  );
};
