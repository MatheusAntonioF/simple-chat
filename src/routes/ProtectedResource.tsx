import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface IPrivateResourceProps {
  children: JSX.Element;
}

export const PrivateResource = ({
  children,
}: IPrivateResourceProps): JSX.Element => {
  const { loggedUser } = useAuth();

  const isSignedIn = !!loggedUser;

  return isSignedIn ? children : <Navigate to="/" replace />;
};
