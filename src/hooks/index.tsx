import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from './useAuth';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
