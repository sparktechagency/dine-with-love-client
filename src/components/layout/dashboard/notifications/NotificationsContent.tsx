"use client";
import { Button } from "@/components/ui/button";
import { NotificationCard } from "./NotificationCard";
import { notifications } from "./mockData";

export const NotificationsContent = () => {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-500 font-medium">
            You have {unreadCount} unread notifications
          </p>
        </div>
        <Button
          variant="ghost"
          className="text-sm rounded-md font-semibold text-[#FF3AB3] hover:text-[#5432C8] hover:bg-pink-50"
        >
          Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};
