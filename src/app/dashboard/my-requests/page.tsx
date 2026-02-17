import { MyRequests } from "@/components/layout/dashboard/MyRequests";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Requests | Dine With Love",
};

const MyRequestsPage = () => {
  return <MyRequests />;
};

export default MyRequestsPage;
