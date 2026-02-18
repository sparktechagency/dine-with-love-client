"use client";

import { cn } from "@/lib/utils";
import { Paperclip, Send } from "lucide-react";
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
        className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex w-full items-end gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
              message.sender === "me" ? "flex-row-reverse" : "flex-row",
            )}
          >
            <div className="relative size-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
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
                "max-w-[60%] px-5 py-4 shadow-sm",
                message.sender === "me"
                  ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] rounded-2xl rounded-tr-none text-white font-bold"
                  : "bg-gray-100/80 rounded-2xl rounded-tl-none text-gray-900 font-bold",
              )}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-gray-100">
        <div className="relative flex items-center gap-3 bg-gray-50/50 rounded-2xl border border-gray-50 px-4 py-3 shadow-none focus-within:ring-1 focus-within:ring-[#FF3AB3]/20 transition-all">
          <input
            type="text"
            placeholder="Type a message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent border-none focus:outline-none text-sm font-bold text-gray-900 placeholder:text-gray-400"
          />
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-[#FF3AB3] transition-colors">
              <Paperclip className="size-5" />
            </button>
            <button
              onClick={handleSend}
              className="size-10 flex items-center justify-center bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md shadow-lg shadow-purple-100 hover:scale-105 transition-all active:scale-95"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
