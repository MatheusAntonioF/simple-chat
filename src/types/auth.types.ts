export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface ILoggedUser {
  token: string;
  id: number;
}

export interface IAuthContext {
  signIn: (data: IAuthCredentials) => Promise<void>;
  loggedUser: ILoggedUser;
  signOut: () => void;
}
