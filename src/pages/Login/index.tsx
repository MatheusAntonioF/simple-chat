import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';

interface IUserCredentials {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserCredentials>();

  const onSubmit = useCallback((props: IUserCredentials) => {
    console.log('🚀 ~ props', props);
  }, []);

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
        minWidth="400px"
        boxShadow="2xl"
        padding="4"
      >
        <Heading size="lg">Simple chat</Heading>
        <Divider mt="4" />

        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          flexDir="column"
          justifyContent="space-around"
          width="full"
          height="full"
        >
          <Input
            label="Email"
            type="email"
            placeholder="Digite seu email"
            {...register('email')}
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            {...register('password')}
            error={errors.password}
          />

          <Button type="submit">Enter</Button>

          <Text textAlign="center">
            New to Simple chat?
            <Link to="/register"> Create an account</Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
