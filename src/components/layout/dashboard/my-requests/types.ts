export type RequestStatus = "pending" | "approved" | "past";

export interface RequestData {
  id: number | string;
  name: string;
  avatar: string;
  requestedDate: string;
  status: string;
  type: string; // e.g., "1:1 Dinner", "Advisor Match"
  isAdvisor?: boolean;
  message?: string;
  dinnerDate?: string;
  location?: string;
  participants?: string[]; // for past dinners
}
