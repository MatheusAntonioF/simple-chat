import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import {
  IAuthContext,
  IAuthCredentials,
  ILoggedUser,
} from '../types/auth.types';

import { useStorageState } from './useLocalStorage';
import { useToast } from './useToast';

const AuthContext = createContext({} as IAuthContext);

export const LABEL_AUTH = '@SIMPLE_CHAT_AUTH';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedUser] = useStorageState<ILoggedUser>({
    initialValue: {} as ILoggedUser,
    labelStorage: LABEL_AUTH,
  });

  const toast = useToast();

  const signIn = useCallback(
    async (props: IAuthCredentials) => {
      try {
        console.log('🚀 ~ props', props);

        throw new Error('');
      } catch (error) {
        toast({
          title: 'Error to authenticate.',
          description:
            'There was an error to authenticate! Check the credentials and try again',
          status: 'error',
        });
      }
    },
    [toast]
  );

  const authValues = useMemo(
    () => ({ signIn, loggedUser }),
    [signIn, loggedUser]
  );

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext.signIn) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return authContext;
};
