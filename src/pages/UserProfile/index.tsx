import { Flex, Box, Heading, Button, Stack, Spinner } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { useUser } from '../../hooks/useUser';
import { ICreateUser } from '../../types/user.types';

export const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { getMeProfile, updateLoggedUser } = useUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICreateUser>();

  useEffect(() => {
    async function fetchMe() {
      const data = await getMeProfile();
      if (!data) return;

      reset({
        name: data.name,
        email: data.email,
      });
    }

    fetchMe();
  }, [reset, getMeProfile]);

  const onSubmit = useCallback(
    async (props: ICreateUser) => {
      try {
        setIsLoading(true);

        await updateLoggedUser(props);
      } finally {
        setIsLoading(false);
      }
    },
    [updateLoggedUser]
  );

  return (
    <Flex align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Update profile
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
                {isLoading ? <Spinner /> : 'Save'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
