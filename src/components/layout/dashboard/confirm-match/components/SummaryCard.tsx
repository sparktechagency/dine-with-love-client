"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const SummaryCard = () => {
  return (
    <div className="bg-white rounded-md p-8 border border-gray-100 flex flex-col gap-8 shadow-none">
      <div className="flex items-center gap-6 p-6 bg-gray-50/50 rounded-md">
        <div className="relative size-20 rounded-md overflow-hidden shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
            alt="Sarah"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-black text-gray-900">Sarah</h3>
            <span className="px-3 py-1 bg-pink-50 text-[#FF3AB3] text-[10px] font-bold rounded-full uppercase">
              1:1 Dinner
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-500">Service Fee</span>
          <span className="font-black text-gray-900">$10.00</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-500">Booking Type</span>
          <span className="font-black text-gray-900">1:1</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-500">Date</span>
          <span className="font-black text-gray-900">13 December</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-500">Time</span>
          <span className="font-black text-gray-900">9:00PM</span>
        </div>
      </div>

      <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md text-lg border-none shadow-none mt-4">
        Proceed to Payment
      </Button>
    </div>
  );
};
