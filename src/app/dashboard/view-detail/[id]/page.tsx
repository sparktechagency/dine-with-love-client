import { UserDetailContent } from "@/components/layout/dashboard/user-detail/UserDetailContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail | Dine With Love",
};

const UserDetailPage = () => {
  return <UserDetailContent />;
};

export default UserDetailPage;
