"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface UserMatchHistoryProps {
  user: any;
  onBack: () => void;
}

const matchHistory = [
  {
    id: 1,
    with: "Emma Wilson",
    type: "1:1 Dinner",
    category: "System",
    status: "Completed",
    date: "2024-02-2024",
    location: "The Italian place",
  },
  {
    id: 2,
    with: "John Doe, Jane Smith",
    type: "Group Dinner",
    category: "Advisor",
    status: "Completed",
    date: "2024-02-2024",
    location: "Sushi Bar",
  },
];

export const UserMatchHistory = ({ user, onBack }: UserMatchHistoryProps) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="size-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <ArrowLeft className="size-6 text-[#9128E6]" />
        </button>
        <h2 className="text-3xl font-black text-gray-900">
          View match history
        </h2>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">
          Match History - {user.name}
        </h3>

        <div className="bg-white rounded-md border border-gray-100 p-10 shadow-sm space-y-6 min-h-[400px]">
          {matchHistory.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-md border border-gray-100 bg-white transition-all hover:border-[#FF3AB3]/30 hover:shadow-sm"
            >
              <div className="flex items-start gap-6">
                <div className="size-12 rounded-full overflow-hidden border border-gray-100 shrink-0">
                  <Image
                    src={`https://i.pravatar.cc/150?u=${item.id}`}
                    alt="Match"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-md font-bold text-gray-900">
                      {item.with}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={cn(
                        "px-3 py-0.5 rounded-full text-[10px] font-bold border",
                        item.category === "System"
                          ? "bg-green-50 text-green-500 border-green-100"
                          : "bg-orange-50 text-orange-500 border-orange-100",
                      )}
                    >
                      {item.category}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-pink-50 text-[#FF3AB3] border border-pink-100">
                      {item.type}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-500 border border-green-100">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 pt-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="size-4" />
                      <span className="text-xs font-bold">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="size-4" />
                      <span className="text-xs font-bold">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
