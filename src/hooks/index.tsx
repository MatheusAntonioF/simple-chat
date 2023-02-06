import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from './useAuth';
import { SocketProvider } from './useSocket';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <SocketProvider>{children}</SocketProvider>
    </AuthProvider>
  );
};
