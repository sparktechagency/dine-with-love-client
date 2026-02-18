"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { AddManualMatch } from "../matches/AddManualMatch";
import { AdvisorUserProfile } from "./AdvisorUserProfile";

interface AdvisorRequest {
  id: string;
  name: string;
  image: string;
  amount: number;
  type: "1:1 dinner";
}

const advisorRequests: AdvisorRequest[] = [
  {
    id: "1234",
    name: "Jhon Doe",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300",
    amount: 120,
    type: "1:1 dinner",
  },
  {
    id: "1235",
    name: "Jhon Doe",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300",
    amount: 120,
    type: "1:1 dinner",
  },
  {
    id: "1236",
    name: "Jhon Doe",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300",
    amount: 120,
    type: "1:1 dinner",
  },
  {
    id: "1237",
    name: "Jhon Doe",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300",
    amount: 120,
    type: "1:1 dinner",
  },
  {
    id: "1238",
    name: "Jhon Doe",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300",
    amount: 120,
    type: "1:1 dinner",
  },
  {
    id: "1239",
    name: "Jhon Doe",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300",
    amount: 120,
    type: "1:1 dinner",
  },
];

export const AdvisorRequestsContent = () => {
  const [view, setView] = useState<"list" | "profile" | "assign">("list");
  const [selectedUser, setSelectedUser] = useState<AdvisorRequest | null>(null);

  const handleViewProfile = (request: AdvisorRequest) => {
    setSelectedUser(request);
    setView("profile");
  };

  const handleAssignDinner = (request: AdvisorRequest) => {
    setSelectedUser(request);
    setView("assign");
  };

  const handeBack = () => {
    setView("list");
    setSelectedUser(null);
  };

  if (view === "profile" && selectedUser) {
    return <AdvisorUserProfile user={selectedUser} onBack={handeBack} />;
  }

  if (view === "assign") {
    return <AddManualMatch onBack={handeBack} />;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black text-gray-900">
        Special Advisor Requests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisorRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-md border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            {/* Type Badge */}
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold bg-pink-50 text-[#FF3AB3] z-10">
              {request.type}
            </span>

            {/* Main Image */}
            <div
              onClick={() => handleViewProfile(request)}
              className="h-32 w-full rounded-md overflow-hidden border border-gray-50 mb-4 cursor-pointer relative"
            >
              <Image
                src={request.image}
                alt="User"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>

            {/* Payment Info */}
            <div className="bg-gray-50 rounded-md p-3 flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-gray-500">
                Total payment
              </span>
              <span className="text-sm font-black text-gray-900">
                ${request.amount}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 h-9 rounded-md border-[#FF3AB3] text-[#FF3AB3] font-bold text-xs hover:bg-pink-50"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleAssignDinner(request)}
                className="flex-1 h-9 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-xs shadow-md hover:opacity-90 cursor-pointer"
              >
                Assign dinner
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
