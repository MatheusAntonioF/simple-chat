import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { Input } from '../../components/Input';

export const Login: FC = () => {
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
        <Heading size="lg">Simple chat</Heading>
        <Divider mt="4" />

        <Flex
          flexDir="column"
          justifyContent="space-around"
          width="full"
          height="full"
        >
          <Input label="Email" />

          <Input label="Password" />

          <Button>Enter</Button>

          <Text textAlign="center">
            New to Simple chat?
            <Link to="/register"> Create an account</Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
