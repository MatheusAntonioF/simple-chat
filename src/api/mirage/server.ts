import { createServer, Model } from 'miragejs';
import { hash } from 'bcryptjs-react';

import { ExistentUser, IUser } from '../../types/user.types';
import { makeUser } from '../factories/makeUser';

export const makeServer = () => {
  /**
   * Create a interceptor to serialize request body to json
   *
   */

  const server = createServer({
    models: {
      user: Model.extend<IUser>({} as ExistentUser),
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', async () => {
        const foundUsers = this.schema.all('user');

        return foundUsers;
      });

      this.post('/users', async (schema, request) => {
        const { name, email, password } = JSON.parse(
          request.requestBody
        ) as IUser;

        const passwordHashed = await hash(password, 8);

        const createdUser = makeUser({
          name,
          email,
          password: passwordHashed,
        });

        schema.create('user', createdUser);

        return { ...createdUser };
      });
    },
  });

  return server;
};
