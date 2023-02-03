import axios from 'axios';

import { persistTokenInAuthenticatedRequest } from './interceptors';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(persistTokenInAuthenticatedRequest, error => {
  Promise.reject(error);
});
