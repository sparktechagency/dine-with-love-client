"use client";

import { useState } from "react";
import { UserList } from "./UserList";
import { UserMatchHistory } from "./UserMatchHistory";
import { UserProfile } from "./UserProfile";
import { UserSuspend } from "./UserSuspend";

import { AdminUser } from "@/types/admin";

export const UserManagementContent = () => {
  const [currentView, setCurrentView] = useState<
    "list" | "profile" | "history" | "suspend"
  >("list");
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  const handleViewProfile = (user: AdminUser) => {
    setSelectedUser(user);
    setCurrentView("profile");
  };

  const handleViewHistory = (user: AdminUser) => {
    setSelectedUser(user);
    setCurrentView("history");
  };

  const handleSuspend = (user: AdminUser) => {
    setSelectedUser(user);
    setCurrentView("suspend");
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedUser(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      {currentView === "list" && (
        <UserList
          onViewProfile={handleViewProfile}
          onViewHistory={handleViewHistory}
          onSuspend={handleSuspend}
        />
      )}

      {currentView === "profile" && selectedUser && (
        <UserProfile user={selectedUser} onBack={handleBack} />
      )}

      {currentView === "history" && selectedUser && (
        <UserMatchHistory user={selectedUser} onBack={handleBack} />
      )}

      {currentView === "suspend" && selectedUser && (
        <UserSuspend user={selectedUser} onBack={handleBack} />
      )}
    </div>
  );
};
