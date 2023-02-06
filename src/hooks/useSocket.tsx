import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import socketIO, { Socket } from 'socket.io-client';

import { useAuth } from './useAuth';

interface ISocketContextProps {
  socket: Socket | null;
}

const SocketContext = createContext({} as ISocketContextProps);

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const { loggedUser } = useAuth();

  useEffect(() => {
    const loggedUserId = loggedUser?.id;

    const socket = socketIO('http://localhost:3333', {
      auth: { userId: loggedUserId },
    });

    socket.on('connect', () => {
      console.log('connect');
      setSocket(socket);
    });
  }, [loggedUser, socket?.connected]);

  const memoized = useMemo(() => ({ socket }), [socket]);

  return (
    <SocketContext.Provider value={memoized}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within Socket Provider');
  }

  return context;
};
