"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  type: string;
  unread: boolean;
}

interface NotificationCardProps {
  notification: Notification;
}

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  return (
    <Card
      className={cn(
        "border-none rounded-md transition-all duration-300 hover:shadow-sm",
        notification.type === "match" && "bg-[#FFF5EB]",
        notification.type === "confirmed" && "bg-[#F0FFF4]",
        notification.type === "advisor" && "bg-[#F3F0FF]",
        notification.type === "payment" && "bg-[#F0F9FF]",
      )}
    >
      <CardContent className="flex items-start justify-between p-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900">{notification.title}</h3>
          <p className="text-sm text-gray-500">{notification.description}</p>
          {notification.unread && (
            <span className="inline-block rounded-md bg-[#FF3AB3] px-2 py-0.5 text-xs font-medium text-white">
              New
            </span>
          )}
        </div>
        <div className="flex flex-col items-end justify-between gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-md text-gray-400 hover:text-gray-600 hover:bg-black/5"
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-4 w-4" />
          </Button>
          <span className="text-xs text-gray-400 font-medium">
            {notification.time}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
