"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoreVertical } from "lucide-react";

interface MatchListProps {
  type: "system" | "advisor";
  onAddMatch: () => void;
}

const systemMatches = [
  {
    id: 1,
    participants: "John Smith",
    type: "1:1 Dinner",
    source: "System",
    status: "Suggested",
  },
  {
    id: 2,
    participants: "Emily Johnson",
    type: "Group Dinner",
    source: "System",
    status: "Booked",
  },
  {
    id: 3,
    participants: "Michael Brown",
    type: "1:1 Dinner",
    source: "System",
    status: "Booked",
  },
  {
    id: 4,
    participants: "Sarah Davis",
    type: "1:1 Dinner",
    source: "System",
    status: "Suggested",
  },
  {
    id: 5,
    participants: "David Wilson",
    type: "1:1 Dinner",
    source: "System",
    status: "Suggested",
  },
];

const advisorMatches = [
  {
    id: 1,
    participants: "John Smith",
    type: "1:1 Dinner",
    source: "Advisor",
    status: "Request",
  },
  {
    id: 2,
    participants: "Emily Johnson",
    type: "Group Dinner",
    source: "Advisor",
    status: "Completed",
  },
  {
    id: 3,
    participants: "Michael Brown",
    type: "1:1 Dinner",
    source: "Advisor",
    status: "Booked",
  },
  {
    id: 4,
    participants: "Sarah Davis",
    type: "1:1 Dinner",
    source: "Advisor",
    status: "Suggested",
  },
  {
    id: 5,
    participants: "David Wilson",
    type: "1:1 Dinner",
    source: "Advisor",
    status: "Suggested",
  },
];

export const MatchList = ({ type, onAddMatch }: MatchListProps) => {
  const data = type === "system" ? systemMatches : advisorMatches;

  return (
    <div className="bg-white rounded-md border border-gray-100 p-8 shadow-sm animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div className="flex bg-gray-50 p-1 rounded-md">
          {/* These tabs are handled by the parent, but we show them here for visual context if needed, 
               though in our case they are effectively buttons that switch state in the parent. */}
        </div>
        <Button
          onClick={onAddMatch}
          className="h-10 px-6 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-xs cursor-pointer hover:opacity-90"
        >
          Add Match
        </Button>
      </div>

      <div className="rounded-md border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white">
              <th className="px-6 py-4 font-bold text-sm">Participants</th>
              <th className="px-6 py-4 font-bold text-sm">Type</th>
              <th className="px-6 py-4 font-bold text-sm">Match Sources</th>
              <th className="px-6 py-4 font-bold text-sm">Status</th>
              <th className="px-6 py-4 font-bold text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-6 py-5 text-sm font-bold text-gray-900">
                  {item.participants}
                </td>
                <td className="px-6 py-5">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold",
                      item.type === "1:1 Dinner"
                        ? "bg-pink-50 text-[#FF3AB3]"
                        : "bg-purple-50 text-[#5432C8]",
                    )}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold border",
                      item.source === "System"
                        ? "bg-green-50 text-green-500 border-green-100"
                        : "bg-orange-50 text-orange-500 border-orange-100",
                    )}
                  >
                    {item.source}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold",
                      item.status === "Suggested" && "bg-blue-50 text-blue-500",
                      item.status === "Booked" && "bg-green-50 text-green-500",
                      item.status === "Request" &&
                        "bg-purple-50 text-[#5432C8]",
                      item.status === "Completed" &&
                        "bg-green-50 text-green-500",
                    )}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className="p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
                    <MoreVertical className="size-5 text-[#9128E6]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
