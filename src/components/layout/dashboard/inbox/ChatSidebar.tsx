"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import { ChatUser } from "./types";

interface ChatSidebarProps {
  chats: ChatUser[];
  selectedChatId: string | number | null;
  onSelectChat: (id: string | number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ChatSidebar = ({
  chats,
  selectedChatId,
  onSelectChat,
  searchQuery,
  onSearchChange,
}: ChatSidebarProps) => {
  const advisors = chats.filter((c) => c.type === "advisor");
  const friends = chats.filter((c) => c.type === "friend");

  return (
    <div className="w-[320px] shrink-0 border-r border-gray-100 bg-white flex flex-col">
      {/* Search Header */}
      <div className="p-4 pt-6 border-b border-gray-50/50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-11 pl-10 pr-4 rounded-md border-none bg-gray-100/50 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#FF3AB3]/20 transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-1 space-y-6 pb-6 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
        {advisors.length > 0 && (
          <div className="space-y-1">
            <h3 className="px-4 py-2 text-md font-black text-gray-900">
              Advisor
            </h3>
            <div className="space-y-0.5">
              {advisors.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onSelectChat(chat.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-none px-4 py-3 text-left transition-all",
                    selectedChatId === chat.id
                      ? "bg-slate-50/80"
                      : "hover:bg-gray-50/50",
                  )}
                >
                  <div className="relative size-12 shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={chat.avatar}
                      alt={chat.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-[15px] text-[#FF3AB3] truncate">
                        {chat.name}
                      </span>
                    </div>
                    <p className="truncate text-xs font-medium text-gray-400 font-sans tracking-tight">
                      {chat.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {friends.length > 0 && (
          <div className="space-y-1">
            <h3 className="px-4 py-2 text-md font-black text-gray-900">
              Friends
            </h3>
            <div className="space-y-0.5">
              {friends.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onSelectChat(chat.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-none px-4 py-3 text-left transition-all",
                    selectedChatId === chat.id
                      ? "bg-slate-50/80"
                      : "hover:bg-gray-50/50",
                  )}
                >
                  <div className="relative size-12 shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={chat.avatar}
                      alt={chat.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-[15px] text-[#FF3AB3] truncate">
                        {chat.name}
                      </span>
                    </div>
                    <p className="truncate text-[13px] font-medium text-gray-400 font-sans tracking-tight">
                      {chat.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
