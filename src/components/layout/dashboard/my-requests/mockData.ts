import { RequestData } from "./types";

export const PENDING_REQUESTS: RequestData[] = [
  {
    id: 1,
    name: "Sarah",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    requestedDate: "November 14, 2023",
    status: "Pending",
    type: "1:1 Dinner",
    message:
      "Your request is being processed. You'll be notified once confirmed!",
  },
  {
    id: 2,
    name: "Sarah",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    requestedDate: "November 13, 2023",
    status: "Pending",
    type: "1:1 Dinner",
    isAdvisor: true,
    message: "You have been invited to talk to a matching advisor",
  },
];

export const APPROVED_REQUESTS: RequestData[] = [
  {
    id: 3,
    name: "Sarah",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    requestedDate: "November 10, 2023",
    status: "Approved",
    type: "1:1 Dinner",
    dinnerDate: "November 15, 2023 at 7:00 Pm",
    location: "The Golden Spoon, Downtown",
  },
];

export const PAST_REQUESTS: RequestData[] = [
  {
    id: 4,
    name: "Emma & Co.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    requestedDate: "November 10, 2023",
    status: "Completed",
    type: "1:1 Dinner",
    dinnerDate: "November 12, 2023 at 7:00 Pm",
    participants: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    ],
  },
];
