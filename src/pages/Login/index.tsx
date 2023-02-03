import { FC, useCallback, useState } from 'react';
import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components/Input';
import { IAuthCredentials } from '../../types/auth.types';
import { useAuth } from '../../hooks/useAuth';

const schemaSignValidator = yup
  .object({
    email: yup.string().required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required();

export const Login: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuthCredentials>({ resolver: yupResolver(schemaSignValidator) });

  const onSubmit = useCallback(
    async ({ email, password }: IAuthCredentials) => {
      try {
        setIsLoading(true);
        await signIn({ email, password });
      } finally {
        setIsLoading(false);
      }
    },
    [signIn]
  );

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to simple chat</Heading>
        </Stack>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          rounded="lg"
          bg="white"
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <Input
              type="email"
              label="Email"
              autoComplete="username"
              {...register('email')}
              error={errors.email}
            />

            <Input
              type="password"
              label="Password"
              autoComplete="current-password"
              {...register('password')}
              error={errors.password}
            />

            <Stack spacing={10}>
              <Button
                type="submit"
                bg="blue.400"
                color="white"
                isDisabled={isLoading}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                {isLoading ? <Spinner /> : 'Sign in'}
              </Button>

              <Link color="blue.400" as={RouterLink} to="/register">
                Create an account
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
