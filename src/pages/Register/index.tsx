import { FC, useCallback } from 'react';
import { Button, Divider, Flex, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';

interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export const Register: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterCredentials>();

  const onSubmit = useCallback((props: IRegisterCredentials) => {
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
        boxShadow="2xl"
        padding="4"
      >
        <Heading size="lg">Register</Heading>
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
            label="Nome"
            placeholder="Digite seu nome"
            {...register('name')}
            error={errors.name}
          />

          <Input
            label="Email"
            type="password"
            placeholder="Digite seu email"
            {...register('email')}
            error={errors.email}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            {...register('password')}
            error={errors.password}
          />

          <Button>Enter</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
