export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface ILoggedUser {
  token: string;
}

export interface IAuthContext {
  signIn: (data: IAuthCredentials) => Promise<void>;
  loggedUser: ILoggedUser;
  signOut: () => void;
}
