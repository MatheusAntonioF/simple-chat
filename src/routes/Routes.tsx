import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
// import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { UserProfile } from '../pages/UserProfile';

export const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />, //<Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/me',
      element: <UserProfile />,
    },
  ]);

  return <RouterProvider router={router} />;
};
