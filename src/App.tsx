import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Routes } from './routes/Routes';
import { Layout } from './components/Layout';
import { AppProviders } from './hooks';

export const App: FC = () => {
  return (
    <ChakraProvider>
      <AppProviders>
        <Layout>
          <Routes />
        </Layout>
      </AppProviders>
    </ChakraProvider>
  );
};
