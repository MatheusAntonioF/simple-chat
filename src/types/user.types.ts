export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface ExistentUser extends IUser {
  id: number;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}
