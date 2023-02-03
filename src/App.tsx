import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Routes } from './routes/Routes';
import { Layout } from './components/Layout';

export const App: FC = () => {
  return (
    <ChakraProvider>
      <Layout>
        <Routes />
      </Layout>
    </ChakraProvider>
  );
};
