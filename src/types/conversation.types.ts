export interface IConversation {
  id: number;
  receiver: number;
  sender: number;
  message: string;
  created_at: Date;
}
