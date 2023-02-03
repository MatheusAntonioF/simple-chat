import { v4 as uuidv4 } from 'uuid';

import { ExistentUser, IUser } from '../../types/user.types';

export const makeUser = ({ name, email, password }: IUser): ExistentUser => {
  return {
    id: uuidv4(),
    name,
    email,
    password,
  };
};
