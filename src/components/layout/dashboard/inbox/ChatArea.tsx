"use client";

import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChatUser, Message } from "./types";

interface ChatAreaProps {
  selectedChat: ChatUser | null;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export const ChatArea = ({
  selectedChat,
  messages,
  onSendMessage,
}: ChatAreaProps) => {
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50/30 text-gray-400 font-bold">
        Select a chat to start messaging
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      {/* Header */}
      <div className="h-20 flex items-center px-8 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="relative size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image
              src={selectedChat.avatar}
              alt={selectedChat.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-black text-gray-900">{selectedChat.name}</h4>
            <p className="text-[10px] font-bold text-gray-400 tracking-tight">
              Last active: Today at 10:42 AM
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex w-full items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
              message.sender === "me" ? "flex-row-reverse" : "flex-row",
            )}
          >
            <div className="relative size-10 rounded-full overflow-hidden shrink-0">
              <Image
                src={
                  message.sender === "me"
                    ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
                    : selectedChat.avatar
                }
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>
            <div
              className={cn(
                "max-w-[70%] px-5 py-3 shadow-none",
                message.sender === "me"
                  ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] rounded-md text-white font-medium"
                  : "bg-gray-100 rounded-md text-gray-900 font-medium",
              )}
            >
              <p className="text-[15px] leading-snug">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center gap-3 bg-gray-100/50 rounded-md border-none px-4 py-1.5 shadow-none focus-within:ring-1 focus-within:ring-[#FF3AB3]/20 transition-all">
            <input
              type="text"
              placeholder="Type a message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 h-10 bg-transparent border-none focus:outline-none text-sm font-medium text-gray-900 placeholder:text-gray-400"
            />
            <button className="p-2 text-gray-400 hover:text-[#FF3AB3] transition-colors">
              <ImageIcon className="size-5 opacity-40" />
            </button>
          </div>
          <button
            onClick={handleSend}
            className="h-[52px] px-6 flex items-center justify-center bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-sm shadow-sm transition-all active:scale-95"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
