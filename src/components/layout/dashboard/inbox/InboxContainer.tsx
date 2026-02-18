"use client";

import { useState } from "react";
import { ChatArea } from "./ChatArea";
import { ChatSidebar } from "./ChatSidebar";
import { INITIAL_CHATS, INITIAL_MESSAGES } from "./mockData";
import { ChatUser, Message } from "./types";

export const InboxContainer = () => {
  const [chats, setChats] = useState<ChatUser[]>(INITIAL_CHATS);
  const [messagesMap, setMessagesMap] =
    useState<Record<string | number, Message[]>>(INITIAL_MESSAGES);
  const [selectedChatId, setSelectedChatId] = useState<string | number | null>(
    2,
  ); // Default to Emma Brown
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const selectedChat = chats.find((c) => c.id === selectedChatId) || null;
  const currentMessages = selectedChatId
    ? messagesMap[selectedChatId] || []
    : [];

  const handleSendMessage = (content: string) => {
    if (!selectedChatId) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "me",
      content,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Update messages
    setMessagesMap((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
    }));

    // Update last message in chat list
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChatId
          ? { ...chat, lastMessage: content, time: newMessage.time }
          : chat,
      ),
    );
  };

  return (
    <div className="w-full h-[calc(100vh-(--spacing(36)))] bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 flex overflow-hidden animate-in fade-in duration-500">
      <ChatSidebar
        chats={filteredChats}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ChatArea
        selectedChat={selectedChat}
        messages={currentMessages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};
