import { FC, useCallback, useState } from 'react';
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Spinner,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { ICreateUser } from '../../types/user.types';
import { useUser } from '../../hooks/useUser';

export const Register: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { createUser } = useUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICreateUser>();

  const onSubmit = useCallback(
    async ({ name, email, password }: ICreateUser) => {
      try {
        setIsLoading(true);
        await createUser({ name, email, password });

        navigate('/');
      } finally {
        setIsLoading(false);
      }
    },
    [createUser, navigate]
  );

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Register yourself
          </Heading>
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
              label="Name"
              isRequired
              {...register('name')}
              error={errors.name}
            />

            <Input
              label="Email"
              type="email"
              isRequired
              {...register('email')}
              error={errors.email}
            />

            <Input
              type="password"
              label="Password"
              isRequired
              {...register('password')}
              error={errors.password}
            />

            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                size="lg"
                bg="blue.400"
                color="white"
                isDisabled={isLoading}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                {isLoading ? <Spinner /> : 'Sign up'}
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align="center">
                Already a user?{' '}
                <Link color="blue.400" as={RouterLink} to="/">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
