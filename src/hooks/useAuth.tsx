import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import { useInternalAuth } from '../services/http/modules/authentication';
import {
  IAuthContext,
  IAuthCredentials,
  ILoggedUser,
} from '../types/auth.types';

import { useStorageState } from './useLocalStorage';

const AuthContext = createContext({} as IAuthContext);

export const LABEL_AUTH = '@SIMPLE_CHAT_AUTH';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedUser, setLoggedUser, removeStorage] =
    useStorageState<ILoggedUser>({
      initialValue: {} as ILoggedUser,
      labelStorage: LABEL_AUTH,
    });

  const { authenticateUser } = useInternalAuth();

  const signIn = useCallback(
    async ({ email, password }: IAuthCredentials) => {
      try {
        const data = await authenticateUser({ email, password });

        if (data) {
          setLoggedUser({ token: data.token });
        }
      } catch (error) {}
    },
    [authenticateUser, setLoggedUser]
  );

  const signOut = useCallback(() => removeStorage(LABEL_AUTH), [removeStorage]);

  const authValues = useMemo(
    () => ({ signIn, loggedUser, signOut }),
    [signIn, loggedUser, signOut]
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
