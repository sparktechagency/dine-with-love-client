"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const requests = [
  {
    id: 1,
    name: "Sarah",
    date: "November 14, 2023",
    status: "Pending",
    message:
      "Your request is being processed. You'll be notified once confirmed!",
    isAdvisor: false,
  },
  {
    id: 2,
    name: "Sarah",
    date: "November 13, 2023",
    status: "Pending",
    message: "You have been invited to talk to a matching advisor",
    isAdvisor: true,
  },
];

export const MyRequests = () => {
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "past">(
    "pending",
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-gray-900">Request</h2>
          <p className="text-gray-500 font-medium tracking-tight">
            Track and manage your dinner requests
          </p>
        </div>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#FF3AB3]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-12 pl-10 pr-2 rounded-xl border border-gray-100 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all shadow-sm shadow-gray-50"
          />
        </div>
      </div>

      <div className="bg-gray-50/50 p-1 rounded-xl flex gap-1 w-full max-w-3xl border border-gray-100/50">
        {(["pending", "approved", "past"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 h-14 rounded-xl font-bold transition-all capitalize",
              activeTab === tab
                ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-lg shadow-purple-100/50"
                : "text-gray-400 hover:text-gray-600 hover:bg-white/50",
            )}
          >
            {tab === "past" ? "Past Dinners" : tab}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-black text-gray-900">Requests:</h3>
        <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-12 shadow-none">
          {requests.map((request) => (
            <div key={request.id} className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="relative size-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                      alt={request.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-gray-900">
                      {request.name}
                    </h4>
                    <p className="text-sm font-bold text-gray-400 font-sans tracking-tight">
                      Requested on {request.date}
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-yellow-50 text-yellow-500 text-[10px] font-bold rounded-full uppercase border border-yellow-100/50">
                        1:1 Dinner
                      </span>
                      {request.isAdvisor && (
                        <span className="px-3 py-1 bg-purple-50 text-purple-500 text-[10px] font-bold rounded-full uppercase border border-purple-100/50">
                          Advisor Match
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-yellow-50/50 text-yellow-600 text-[10px] font-black rounded-full uppercase border border-yellow-100/50">
                  {request.status}
                </div>
              </div>

              <div className="p-6 bg-pink-50/30 rounded-xl border border-pink-100/50 space-y-2">
                <p className="text-sm font-black text-[#FF3AB3]">
                  Important Note:
                </p>
                <p className="text-sm font-bold text-gray-500 flex items-center gap-2">
                  {request.isAdvisor ? "✅" : "⏳"} {request.message}
                </p>
              </div>
            </div>
          ))}

          {activeTab === "approved" && (
            <div className="space-y-6 pt-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="relative size-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      alt="Tom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-gray-900">Sarah</h4>
                    <span className="px-3 py-1 bg-green-50 text-green-500 text-[10px] font-bold rounded-full uppercase border border-green-100/50">
                      Approved
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-pink-50/30 rounded-xl border border-pink-100/50 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-md bg-linear-to-br from-[#FF3AB3] to-[#5432C8] flex items-center justify-center text-white shrink-0">
                    🍽️
                  </div>
                  <h5 className="font-black text-[#FF3AB3]">Dinner Details</h5>
                </div>
                <div className="space-y-3 pl-13">
                  <p className="text-sm font-bold text-gray-600 flex items-center gap-3">
                    📅 November 15 , 2023 at 7:00 Pm
                  </p>
                  <p className="text-sm font-bold text-gray-600 flex items-center gap-3">
                    📍 The Golden Spoon, Downtown
                  </p>
                  <p className="text-sm font-bold text-[#FF3AB3] italic pt-2">
                    A confirmation has been sent to your email . See you there !
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "past" && (
            <div className="space-y-6 pt-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="relative size-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                      alt="Emma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-gray-900">
                      Emma & Co.
                    </h4>
                    <p className="text-sm font-bold text-gray-400 font-sans tracking-tight">
                      Requested on November 10, 2023
                    </p>
                    <span className="px-3 py-1 bg-purple-50 text-purple-500 text-[10px] font-bold rounded-full uppercase border border-purple-100/50">
                      1:1 Dinner
                    </span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-blue-50/50 text-blue-600 text-[10px] font-black rounded-full uppercase border border-blue-100/50">
                  Completed
                </div>
              </div>
              <div className="p-6 bg-pink-50/30 rounded-xl border border-pink-100/50 space-y-4">
                <p className="text-sm font-black text-[#FF3AB3]">
                  Dinner Details:
                </p>
                <p className="text-sm font-bold text-gray-600 flex items-center gap-3">
                  📅 November 12 , 2023 at 7:00 Pm
                </p>
                <div className="flex gap-2 pt-2">
                  <div className="size-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100"
                      alt="p1"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="size-10 rounded-full border-2 border-white overflow-hidden shadow-sm -ml-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100"
                      alt="p2"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-xl text-lg border-none shadow-none">
                Give feedback
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
