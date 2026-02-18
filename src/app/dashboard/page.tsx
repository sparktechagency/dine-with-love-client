import { DashboardHomeContent } from "@/components/layout/dashboard/home/DashboardHomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Dine With Love",
};

const DashboardPage = () => {
  return <DashboardHomeContent />;
};

export default DashboardPage;
