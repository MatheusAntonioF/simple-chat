import { Avatar, Button, Divider, Flex, Text } from '@chakra-ui/react';

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
    <>
      <Button
        variant="ghost"
        w="full"
        h={16}
        flex="1"
        justifyContent="flex-start"
        cursor="pointer"
        onClick={setActiveChat}
        _hover={{
          bg: 'gray.200',
        }}
      >
        <Avatar mr={3} />
        <Flex
          flexDir="column"
          alignItems="flex-start"
          justifyContent="space-around"
          pt={1}
          pb={1}
          h="full"
        >
          <Text>{contactName}</Text>
          <Text fontSize="sm" fontWeight="medium">
            {lastMessage}
          </Text>
        </Flex>
      </Button>
      <Divider />
    </>
  );
};
