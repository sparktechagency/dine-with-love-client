import UserDetail from "@/components/layout/dashboard/UserDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail | Dine With Love",
};

const UserDetailPage = () => {
  return <UserDetail />;
};

export default UserDetailPage;
