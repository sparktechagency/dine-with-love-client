export interface AdminUser {
  id: number | string;
  name: string;
  email: string;
  match?: string;
  joinDate?: string;
  poolStatus?: "Active" | "Inactive";
  type?: "1:1 Dinner" | "Group Dinner" | "1:1 dinner";
  image?: string;
  status?: string;
}

export interface AdvisorRequest {
  id: string;
  name: string;
  image: string;
  amount: number;
  type: "1:1 dinner";
}
