import { DashboardHome } from "@/components/layout/dashboard/DashboardHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Dine With Love",
};

const DashboardPage = () => {
  return <DashboardHome />;
};

export default DashboardPage;
