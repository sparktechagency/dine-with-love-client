export interface Message {
  id: string | number;
  sender: "me" | "other";
  content: string;
  time: string;
  avatar?: string;
}

export interface ChatUser {
  id: string | number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  status?: string;
  type: "advisor" | "friend";
}
