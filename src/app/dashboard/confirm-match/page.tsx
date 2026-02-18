import { ConfirmMatchContent } from "@/components/layout/dashboard/confirm-match/ConfirmMatchContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Match | Dine With Love",
};

const ConfirmMatchPage = () => {
  return <ConfirmMatchContent />;
};

export default ConfirmMatchPage;
