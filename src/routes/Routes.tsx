import React, { FC } from 'react';
import { BrowserRouter, Routes as ReactRouter, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { UserProfile } from '../pages/UserProfile';

import { PrivateResource } from './ProtectedResource';
import { RedirectResource } from './RedirectResource';

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route
          path="/"
          element={
            <RedirectResource>
              <Login />
            </RedirectResource>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectResource>
              <Register />
            </RedirectResource>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateResource>
              <Dashboard />
            </PrivateResource>
          }
        />
        <Route
          path="/me"
          element={
            <PrivateResource>
              <UserProfile />
            </PrivateResource>
          }
        />
      </ReactRouter>
    </BrowserRouter>
  );
};
