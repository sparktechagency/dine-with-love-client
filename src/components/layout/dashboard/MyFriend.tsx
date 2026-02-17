"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Tahmidul hasan",
    distance: "1.2km away",
    match: 78,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Hasnyen",
    distance: "1.5km away",
    match: 75,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    highlight: true,
  },
  {
    id: 3,
    name: "Siam Pandy",
    distance: "2km away",
    match: 85,
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Fuzi chai",
    distance: "3km away",
    match: 72,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Jemmy lukaz",
    distance: "1km away",
    match: 55,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Tommy sing",
    distance: "1.2km away",
    match: 65,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
  },
];

export const MyFriend = () => {
  const [activeTab, setActiveTab] = useState<"requests" | "all">("requests");
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedFriends((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">
          Friend & Friend Requests
        </h2>
        <p className="text-gray-500 font-medium">
          Track and manage your dinner requests
        </p>
      </div>

      <div className="bg-gray-100/50 p-1 rounded-lg flex gap-1 w-full max-w-2xl">
        <button
          onClick={() => setActiveTab("requests")}
          className={cn(
            "flex-1 h-12 rounded-lg font-bold transition-all",
            activeTab === "requests"
              ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-none"
              : "text-gray-500 hover:text-gray-700",
          )}
        >
          Friend request
        </button>
        <button
          onClick={() => setActiveTab("all")}
          className={cn(
            "flex-1 h-12 rounded-lg font-bold transition-all",
            activeTab === "all"
              ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-none"
              : "text-gray-500 hover:text-gray-700",
          )}
        >
          All Friend
        </button>
      </div>

      {activeTab === "all" && (
        <div className="flex justify-end items-center gap-2">
          <Checkbox id="select-friend" className="size-5 border-gray-100" />
          <label
            htmlFor="select-friend"
            className="text-sm font-bold text-gray-700 cursor-pointer"
          >
            Select friend
          </label>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        {users.map((user) => (
          <div
            key={user.id}
            className={cn(
              "bg-white rounded-lg p-4 border border-gray-100 flex flex-col gap-4 relative",
              user.highlight && "bg-pink-50/50 border-pink-100 shadow-none",
            )}
          >
            {activeTab === "all" && (
              <div className="absolute top-6 right-6 z-10">
                <Checkbox
                  checked={selectedFriends.includes(user.id)}
                  onCheckedChange={() => toggleSelect(user.id)}
                  className="size-5 bg-white/80 border-none data-[state=checked]:bg-[#FF3AB3]"
                />
              </div>
            )}

            <div className="relative aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-gray-900">{user.name}</h4>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-bold text-gray-400">
                    Match {user.match}%
                  </span>
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8]"
                      style={{ width: `${user.match}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                <span>{user.distance}</span>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {activeTab === "requests" ? (
                  <>
                    <Button className="w-full h-10 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg border-none shadow-none">
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-10 border-[#5432C8] text-[#FF3AB3] font-bold rounded-lg hover:bg-pink-50 transition-colors border-none shadow-none"
                    >
                      Delete
                    </Button>
                  </>
                ) : (
                  <Button className="w-full h-10 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg border-none shadow-none">
                    Dinner Request
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeTab === "all" && selectedFriends.length > 0 && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-8">
          <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg text-lg border-none shadow-lg">
            Group dinner request
          </Button>
        </div>
      )}
    </div>
  );
};
