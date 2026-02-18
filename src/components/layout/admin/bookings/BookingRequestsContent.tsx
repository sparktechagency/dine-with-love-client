"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BookDinnerForm } from "./BookDinnerForm";

interface BookingRequest {
  id: string;
  sender: string;
  match: string;
  senderImage: string;
  matchImage: string;
  amount: number;
  type: "1:1 dinner" | "Group";
  sentTime: string;
  status: "Pending" | "Assigned";
}

const bookingRequests: BookingRequest[] = [
  {
    id: "1234",
    sender: "Alex(sender)",
    match: "Sara(Match)",
    senderImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100",
    matchImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    amount: 120,
    type: "1:1 dinner",
    sentTime: "2 hr ago",
    status: "Pending",
  },
  {
    id: "1235",
    sender: "Alex(sender)",
    match: "Sara(Match)",
    senderImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100",
    matchImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    amount: 120,
    type: "Group",
    sentTime: "2 hr ago",
    status: "Pending",
  },
  {
    id: "1236",
    sender: "Alex(sender)",
    match: "Sara(Match)",
    senderImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100",
    matchImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    amount: 120,
    type: "1:1 dinner",
    sentTime: "2 hr ago",
    status: "Pending",
  },
];

export const BookingRequestsContent = () => {
  const [view, setView] = useState<"list" | "book">("list");
  const [selectedRequest, setSelectedRequest] = useState<BookingRequest | null>(
    null,
  );

  const handleAssignDinner = (request: BookingRequest) => {
    setSelectedRequest(request);
    setView("book");
  };

  const handleBack = () => {
    setView("list");
    setSelectedRequest(null);
  };

  if (view === "book") {
    return <BookDinnerForm onBack={handleBack} />;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black text-gray-900">Booking Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookingRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-md border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Type Badge */}
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold ${
                request.type === "1:1 dinner"
                  ? "bg-pink-50 text-[#FF3AB3]"
                  : "bg-purple-50 text-[#5432C8]"
              }`}
            >
              {request.type}
            </span>

            {/* Participants */}
            <div className="flex items-center justify-between mb-8 mt-4 px-2">
              <div className="flex flex-col items-center gap-2">
                <div className="size-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={request.senderImage}
                    alt="Sender"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-xs font-bold text-gray-900">
                  {request.sender}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center relative -mt-6">
                <div className="h-px w-20 bg-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
                <div className="size-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] rounded-full flex items-center justify-center relative z-10 shadow-sm">
                  <Heart className="size-4 text-white fill-white" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="size-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={request.matchImage}
                    alt="Match"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-xs font-bold text-gray-900">
                  {request.match}
                </span>
              </div>
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
                className="flex-1 h-9 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-xs shadow-md hover:opacity-90"
              >
                Assign dinner
              </Button>
            </div>

            {/* Footer Info */}
            <div className="flex justify-between items-center mt-4 text-[10px] text-gray-400 font-medium border-t border-gray-50 pt-3">
              <span>Request id:{request.id}</span>
              <span>Sent:{request.sentTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
