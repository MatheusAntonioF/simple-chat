export interface IActiveContact {
  id: number;
  name: string;
}

export interface IContact {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  sender: number;
  receiver: number;
  message: string;
}
