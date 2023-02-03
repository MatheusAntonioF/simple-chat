import { FC } from 'react';

import { Button, Divider, Flex, Heading } from '@chakra-ui/react';
import { Input } from '../../components/Input';

export const Register: FC = () => {
  return (
    <Flex
      width="full"
      height="full"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        borderRadius="lg"
        width="20%"
        height="50%"
        boxShadow="2xl"
        padding="4"
      >
        <Heading size="lg">Register</Heading>
        <Divider mt="4" />

        <Flex
          flexDir="column"
          justifyContent="space-around"
          width="full"
          height="full"
        >
          <Input label="Nome" />

          <Input label="Email" />

          <Input label="Senha" />

          <Button>Enter</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
