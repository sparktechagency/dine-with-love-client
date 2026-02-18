import { AdminPlaceholderContent } from "@/components/layout/admin/AdminPlaceholderContent";
import { UserCheck } from "lucide-react";

const AdvisorRequestsPage = () => {
  return (
    <AdminPlaceholderContent
      title="Special Advisor Requests"
      icon={UserCheck}
    />
  );
};

export default AdvisorRequestsPage;
