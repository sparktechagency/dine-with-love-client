"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FriendCard } from "./FriendCard";
import { users } from "./mockData";

export const MyFriendContent = () => {
  const [activeTab, setActiveTab] = useState<"requests" | "all">("requests");
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedFriends((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  };

  return (
    <section className="space-y-8 animate-in fade-in duration-500 ">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">
          Friend & Friend Requests
        </h2>
        <p className="text-gray-500 font-medium">
          Track and manage your dinner requests
        </p>
      </div>

      <div className="bg-gray-100/50 p-1 rounded-md flex gap-1 w-full max-w-2xl">
        <button
          onClick={() => setActiveTab("requests")}
          className={cn(
            "flex-1 h-12 rounded-md font-bold transition-all cursor-pointer",
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
            "flex-1 h-12 rounded-md font-bold transition-all cursor-pointer",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pb-32">
        {users.map((user) => (
          <FriendCard
            key={user.id}
            user={user}
            activeTab={activeTab}
            isSelected={selectedFriends.includes(user.id)}
            onToggleSelect={toggleSelect}
          />
        ))}
      </div>

      {activeTab === "all" && selectedFriends.length > 0 && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-8">
          <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md text-lg border-none shadow-lg">
            Group dinner request
          </Button>
        </div>
      )}
    </section>
  );
};
