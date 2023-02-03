export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface ILoggedUser {
  id: string;
  name: string;
  token: string;
}

export interface IAuthContext {
  signIn: (data: IAuthCredentials) => Promise<void>;
  loggedUser: ILoggedUser;
}
