// eslint-disable-next-line import/named
import { InternalAxiosRequestConfig } from 'axios';

import { LABEL_AUTH } from '../../../hooks/useAuth';
import { ILoggedUser } from '../../../types/auth.types';

const persistTokenInAuthenticatedRequest = (
  request: InternalAxiosRequestConfig
) => {
  if (request.headers?.Authorization) return request;

  const { token }: ILoggedUser = JSON.parse(
    String(localStorage.getItem(LABEL_AUTH))
  );

  if (request.headers) request.headers['Authorization'] = `Bearer ${token}`;

  return request;
};

export { persistTokenInAuthenticatedRequest };
