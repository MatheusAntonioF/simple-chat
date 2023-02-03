import React from 'react';
import { Navigate } from 'react-router-dom';

import { PrivateLayout } from '../components/Layout/Private';
import { useAuth } from '../hooks/useAuth';

interface IPrivateResourceProps {
  children: JSX.Element;
}

export const PrivateResource = ({
  children,
}: IPrivateResourceProps): JSX.Element => {
  const { loggedUser } = useAuth();

  const isSignedIn = !!loggedUser.token;

  return isSignedIn ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <Navigate to="/" replace />
  );
};
