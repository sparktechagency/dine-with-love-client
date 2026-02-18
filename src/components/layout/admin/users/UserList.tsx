"use client";

import { FormInput } from "@/components/ui/form-input";
import { FormSelect } from "@/components/ui/form-select";
import { cn } from "@/lib/utils";
import { MoreVertical, Search } from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Smith",
    match: "John Smith",
    email: "sarah.j@email.com",
    joinDate: "2024-01-15",
    poolStatus: "Active",
    type: "1:1 Dinner",
  },
  {
    id: 2,
    name: "Emily Johnson",
    match: "Emily Johnson",
    email: "mike.p@email.com",
    joinDate: "2024-01-15",
    poolStatus: "Inactive",
    type: "Group Dinner",
  },
  {
    id: 3,
    name: "Michael Brown",
    match: "Michael Brown",
    email: "emily.c@email.com",
    joinDate: "2024-01-15",
    poolStatus: "Active",
    type: "1:1 Dinner",
  },
  {
    id: 4,
    name: "Sarah Davis",
    match: "Sarah Davis",
    email: "david.k@email.com",
    joinDate: "2024-01-15",
    poolStatus: "Active",
    type: "1:1 Dinner",
  },
  {
    id: 5,
    name: "David Wilson",
    match: "David Wilson",
    email: "anna.l@email.com",
    joinDate: "2024-01-15",
    poolStatus: "Active",
    type: "1:1 Dinner",
  },
];

interface UserListProps {
  onViewProfile: (user: any) => void;
  onViewHistory: (user: any) => void;
  onSuspend: (user: any) => void;
}

export const UserList = ({
  onViewProfile,
  onViewHistory,
  onSuspend,
}: UserListProps) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Filters Area */}
      <div className="bg-white rounded-md border border-gray-100 p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">Search</label>
          <FormInput
            icon={Search}
            placeholder="Search"
            className="h-11 bg-white border-gray-200"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">Dinner Type</label>
          <FormSelect
            options={[
              { value: "all", label: "All" },
              { value: "1:1", label: "1:1 Dinner" },
              { value: "group", label: "Group Dinner" },
            ]}
            placeholder="All"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">Filter</label>
          <FormSelect
            options={[
              { value: "all", label: "All" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
            placeholder="All"
          />
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden min-h-[500px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white">
                <th className="px-6 py-4 font-bold text-sm">Name</th>
                <th className="px-6 py-4 font-bold text-sm">Match</th>
                <th className="px-6 py-4 font-bold text-sm">Email</th>
                <th className="px-6 py-4 font-bold text-sm">Join Date</th>
                <th className="px-6 py-4 font-bold text-sm">Pool Status</th>
                <th className="px-6 py-4 font-bold text-sm">Type</th>
                <th className="px-6 py-4 font-bold text-sm">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">
                    {user.match}
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold border",
                        user.poolStatus === "Active"
                          ? "bg-green-50 text-green-500 border-green-100"
                          : "bg-gray-50 text-gray-500 border-gray-200",
                      )}
                    >
                      {user.poolStatus}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold",
                        user.type === "1:1 Dinner"
                          ? "bg-pink-50 text-[#FF3AB3]"
                          : "bg-purple-50 text-[#5432C8]",
                      )}
                    >
                      {user.type}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="relative group/menu">
                      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
                        <MoreVertical className="size-5 text-[#9128E6]" />
                      </button>
                      <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-100 rounded-md shadow-xl py-1 z-10 hidden group-hover/menu:block">
                        <button
                          onClick={() => onViewProfile(user)}
                          className="w-full text-left px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                          View Profile
                        </button>
                        <button
                          onClick={() => onViewHistory(user)}
                          className="w-full text-left px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                          Match History
                        </button>
                        <button
                          onClick={() => onSuspend(user)}
                          className="w-full text-left px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 cursor-pointer"
                        >
                          Suspend
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
