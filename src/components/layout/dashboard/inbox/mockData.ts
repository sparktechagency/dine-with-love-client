import { ChatUser, Message } from "./types";

export const INITIAL_CHATS: ChatUser[] = [
  {
    id: 1,
    name: "Alice Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 2,
    type: "advisor",
  },
  {
    id: 2,
    name: "Emma Brown",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 3,
    name: "Liam Williams",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 4,
    name: "Olivia Jones",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 5,
    name: "Noah Garcia",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 7,
    name: "James Taylor",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 8,
    name: "Isabella Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 9,
    name: "Mason Davis",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 10,
    name: "Charlotte Lopez",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
  {
    id: 11,
    name: "Ethan Wilson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    lastMessage: "Lorem Ipsum is simply dummy text of the ....",
    time: "10:42 AM",
    unread: 0,
    type: "friend",
  },
];

export const INITIAL_MESSAGES: Record<string | number, Message[]> = {
  2: [
    // Emma Brown
    {
      id: 1,
      sender: "other",
      content: "Hey, I'm on my way to the pickup location.",
      time: "10:00 AM",
    },
    {
      id: 2,
      sender: "me",
      content: "Great, please let me know when you arrive.",
      time: "10:05 AM",
    },
    {
      id: 3,
      sender: "other",
      content: "I've arrived at the pickup location.",
      time: "10:15 AM",
    },
    {
      id: 4,
      sender: "me",
      content:
        "Perfect, please load the shipment and confirm when you're ready to depart.",
      time: "10:20 AM",
    },
    {
      id: 5,
      sender: "other",
      content: "Shipment loaded, ready to go.",
      time: "10:25 AM",
    },
    {
      id: 6,
      sender: "me",
      content: "Proceed to the delivery location. Drive safely!",
      time: "10:22 AM",
    },
  ],
  1: [
    // Alice Smith
    {
      id: 1,
      sender: "other",
      content: "Hello! I saw your request for a matching advisor.",
      time: "09:00 AM",
    },
    {
      id: 2,
      sender: "me",
      content:
        "Yes, I'd like to find someone specifically for Italian dinners.",
      time: "09:15 AM",
    },
  ],
};
