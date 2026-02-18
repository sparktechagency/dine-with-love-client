import { AdminPlaceholderContent } from "@/components/layout/admin/AdminPlaceholderContent";
import { CalendarCheck } from "lucide-react";

const BookingsPage = () => {
  return (
    <AdminPlaceholderContent title="Booking Requests" icon={CalendarCheck} />
  );
};

export default BookingsPage;
