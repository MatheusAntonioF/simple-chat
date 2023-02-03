import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const RedirectResource = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { loggedUser } = useAuth();

  const isSignedIn = !!loggedUser;

  return isSignedIn ? <Navigate to="/dashboard" /> : children;
};
