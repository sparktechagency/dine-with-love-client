"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { Search } from "lucide-react";
import Image from "next/image";

const notifications = [
  {
    id: 1,
    title: "Sara & zara was matched",
    description:
      "Sarah is a 92% match for you! Check out her profile and send a dinner request.",
    users: [
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    ],
    unread: true,
  },
  {
    id: 2,
    title: "Sara & zara & 2 other was matched",
    description:
      "Sarah is a 92% match for you! Check out her profile and send a dinner request.",
    users: [
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100",
    ],
    unread: true,
  },
];

export const NotificationsContent = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-gray-900">Notifications</h2>
        <div className="w-80">
          <FormInput
            icon={Search}
            placeholder="Search"
            className="bg-white border-gray-100"
          />
        </div>
      </div>

      <div className="bg-white rounded-md border border-gray-100 p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Chat</h3>
            <p className="text-sm font-medium text-gray-400">
              You have 2 unread notifications.
            </p>
          </div>
          <button className="text-sm font-bold text-gray-900 hover:text-[#FF3AB3] transition-colors cursor-pointer">
            Make all as Read
          </button>
        </div>

        <div className="space-y-6">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-[#FFF8F3] rounded-md p-6 flex flex-col gap-4 border border-orange-50/50"
            >
              <div className="flex -space-x-4">
                {notification.users.map((src, idx) => (
                  <div
                    key={idx}
                    className="size-12 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >
                    <Image
                      src={src}
                      alt="User"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-gray-900">
                  {notification.title}
                </h4>
                <p className="text-sm font-medium text-gray-500">
                  {notification.description}
                </p>
              </div>

              <Button className="w-fit h-8 px-5 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-[10px] shadow-sm hover:opacity-90 active:scale-95 cursor-pointer">
                Unlock chat
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
