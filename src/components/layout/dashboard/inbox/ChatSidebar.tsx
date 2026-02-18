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

  const renderChatItem = (chat: ChatUser) => (
    <button
      key={chat.id}
      onClick={() => onSelectChat(chat.id)}
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition-all group",
        selectedChatId === chat.id
          ? "bg-slate-50 shadow-sm"
          : "hover:bg-gray-50/50",
      )}
    >
      <div className="relative size-12 shrink-0 rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform group-hover:scale-105">
        <Image
          src={chat.avatar}
          alt={chat.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between gap-1">
          <span
            className={cn(
              "font-black text-sm transition-colors",
              selectedChatId === chat.id ? "text-[#5432C8]" : "text-gray-900",
            )}
          >
            {chat.name}
          </span>
          {chat.unread > 0 && (
            <span className="size-2 rounded-full bg-[#FF3AB3] ring-2 ring-white" />
          )}
        </div>
        <p className="truncate text-[11px] font-bold text-gray-400 font-sans tracking-tight">
          {chat.lastMessage}
        </p>
      </div>
    </button>
  );

  return (
    <div className="w-[320px] shrink-0 border-r bg-white flex flex-col">
      {/* Search Header */}
      <div className="p-4 pt-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-50 bg-gray-50/50 text-sm font-bold focus:outline-none focus:ring-1 focus:ring-[#FF3AB3]/20 transition-all placeholder:text-gray-400 shadow-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-6 pb-6 scrollbar-hide">
        {advisors.length > 0 && (
          <div className="space-y-2">
            <h3 className="px-3 text-xs font-black text-gray-900 flex items-center gap-2">
              Advisor
              <div className="h-px flex-1 bg-gray-50" />
            </h3>
            <div className="space-y-0.5">{advisors.map(renderChatItem)}</div>
          </div>
        )}

        {friends.length > 0 && (
          <div className="space-y-2">
            <h3 className="px-3 text-xs font-black text-gray-900 flex items-center gap-2">
              Friends
              <div className="h-px flex-1 bg-gray-50" />
            </h3>
            <div className="space-y-0.5">{friends.map(renderChatItem)}</div>
          </div>
        )}
      </div>
    </div>
  );
};
