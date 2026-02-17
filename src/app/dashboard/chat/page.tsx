"use client";
import { Paperclip, Search, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const advisors = [
  {
    id: 1,
    name: "Alice Smith",
    avatar: "/avatars/alice.png", // Placeholder
    lastMessage: "Lorem Ipsum is simply dummy text of the ...",
    time: "10:42 AM",
    unread: 2,
  },
];

const friends = [
  {
    id: 2,
    name: "Emma Brown",
    avatar: "/avatars/emma.png",
    lastMessage: "Lorem Ipsum is simply dummy text of the ...",
    time: "10:42 AM",
    unread: 0,
  },
  {
    id: 3,
    name: "Liam Williams",
    avatar: "/avatars/liam.png",
    lastMessage: "Lorem Ipsum is simply dummy text of the ...",
    time: "10:42 AM",
    unread: 0,
  },
  {
    id: 4,
    name: "Olivia Jones",
    avatar: "/avatars/olivia.png",
    lastMessage: "Lorem Ipsum is simply dummy text of the ...",
    time: "10:42 AM",
    unread: 0,
  },
  {
    id: 5,
    name: "Noah Garcia",
    avatar: "/avatars/noah.png",
    lastMessage: "Lorem Ipsum is simply dummy text of the ...",
    time: "10:42 AM",
    unread: 0,
  },
  {
    id: 6,
    name: "Sophia Martinez",
    avatar: "/avatars/sophia.png",
    lastMessage: "Lorem Ipsum is simply dummy text of the ...",
    time: "10:42 AM",
    unread: 0,
  },
  {
    id: 7,
    name: "James Taylor",
    avatar: "/avatars/james.png",
    lastMessage: "Lorem Ipsum is simply dummy text of the ...",
    time: "10:42 AM",
    unread: 0,
  },
];

const messages = [
  {
    id: 1,
    sender: "other",
    content: "Hey, I'm on my way to the pickup location.",
    time: "10:00 AM",
  },
  {
    id: 2,
    sender: "me",
    content: "Great, please let me know when you arrive.",
    time: "10:05 AM",
    avatar: "/avatars/me.png",
  },
  {
    id: 3,
    sender: "other",
    content: "I've arrived at the pickup location.",
    time: "10:15 AM",
  },
  {
    id: 4,
    sender: "me",
    content:
      "Perfect, please load the shipment and confirm when you're ready to depart.",
    time: "10:20 AM",
    avatar: "/avatars/me.png",
  },
  {
    id: 5,
    sender: "other",
    content: "Shipment loaded, ready to go.",
    time: "10:25 AM",
  },
  {
    id: 6,
    sender: "me",
    content: "Proceed to the delivery location. Drive safely!",
    time: "10:22 AM",
  },
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div className="flex h-[calc(100vh-6rem)] overflow-hidden rounded-lg bg-background shadow-sm">
      {/* Sidebar */}
      <div className="w-80 border-r bg-background flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-9 bg-muted/50 border-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 pb-2">
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Advisor
            </h3>
            <div className="space-y-1">
              {advisors.map((advisor) => (
                <button
                  key={advisor.id}
                  onClick={() => setSelectedChat(advisor.id)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-accent"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border bg-muted">
                    {/* Placeholder for Avatar */}
                    <div className="grid h-full w-full place-items-center bg-gray-200 text-gray-500 font-bold">
                      {advisor.name[0]}
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{advisor.name}</span>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {advisor.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 py-2">
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Friends
            </h3>
            <div className="space-y-1">
              {friends.map((friend) => (
                <button
                  key={friend.id}
                  onClick={() => setSelectedChat(friend.id)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-accent"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border bg-muted">
                    <div className="grid h-full w-full place-items-center bg-gray-200 text-gray-500 font-bold">
                      {friend.name[0]}
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{friend.name}</span>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {friend.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col bg-slate-50/50">
        <div className="flex h-16 items-center border-b bg-background px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border bg-muted">
              <div className="grid h-full w-full place-items-center bg-gray-200 text-gray-500 font-bold">
                J
              </div>
            </div>
            <div>
              <span className="block font-medium">John Davis</span>
              <span className="text-xs text-muted-foreground">
                Last active: Today at 10:42 AM
              </span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {/* Add call/video icons if needed, not in design but common */}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex w-full items-end gap-2",
                message.sender === "me" ? "justify-end" : "justify-start",
              )}
            >
              {message.sender === "other" && (
                <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <div className="grid h-full w-full place-items-center text-xs font-bold text-gray-500">
                    JD
                  </div>
                </div>
              )}
              <div
                className={cn(
                  "max-w-[70%] rounded-2xl px-4 py-3 shadow-xs",
                  message.sender === "me"
                    ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-br-none"
                    : "bg-white text-foreground rounded-bl-none border border-slate-100",
                )}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.sender === "me" && (
                <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <div className="grid h-full w-full place-items-center text-xs font-bold text-gray-500">
                    Me
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 bg-background border-t">
          <div className="flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 border">
            <Input
              placeholder="Type a message"
              className="border-none bg-transparent shadow-none focus-visible:ring-0 px-0"
            />
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 rounded-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
