"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    title: "New Match Available!",
    description:
      "Sarah is a 92% match for you! Check out her profile and send a dinner request.",
    time: "11:50 PM",
    type: "match",
    unread: true,
  },
  {
    id: 2,
    title: "Dinner Confirmed",
    description:
      "Your dinner with Mike has been confirmed for November 15 at 7:00 PM at The Golden Spoon.",
    time: "07:50 PM",
    type: "confirmed",
    unread: false,
  },
  {
    id: 3,
    title: "Advisor requested match available",
    description:
      "Our advisors have found a special match for you based on your preferences. Check it out!",
    time: "07:51 PM",
    type: "advisor",
    unread: false,
  },
  {
    id: 4,
    title: "Payment Received",
    description:
      "We have received your payment of $49.99. Your booking is being processed.",
    time: "1 Day",
    type: "payment",
    unread: false,
  },
];

const NotificationsContent = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Notifications</h1>
          <p className="text-muted-foreground">
            You have {notifications.filter((n) => n.unread).length} unread
            notifications
          </p>
        </div>
        <Button variant="ghost" className="text-sm rounded-md font-semibold">
          Make all as Read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={cn(
              "border-none rounded-md",
              notification.type === "match" && "bg-[#FFF5EB]",
              notification.type === "confirmed" && "bg-[#F0FFF4]",
              notification.type === "advisor" && "bg-[#F3F0FF]",
              notification.type === "payment" && "bg-[#F0F9FF]",
            )}
          >
            <CardContent className="flex items-start justify-between p-4">
              <div className="space-y-1">
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
                {notification.unread && (
                  <span className="inline-block rounded-md bg-[#D946EF] px-2 py-0.5 text-xs font-medium text-white">
                    New
                  </span>
                )}
              </div>
              <div className="flex flex-col items-end justify-between gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-md text-muted-foreground"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x h-4 w-4"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
                <span className="text-xs text-muted-foreground">
                  {notification.time}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationsContent;
