"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface AdvisorUserProfileProps {
  user: any;
  onBack: () => void;
}

export const AdvisorUserProfile = ({
  user,
  onBack,
}: AdvisorUserProfileProps) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="size-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <ArrowLeft className="size-6 text-[#9128E6]" />
        </button>
        <h2 className="text-3xl font-black text-gray-900">View Profile</h2>
      </div>

      <div className="bg-white rounded-md border border-gray-100 py-16 px-10 shadow-sm relative overflow-hidden">
        <h3 className="text-xl font-bold text-gray-900 mb-12">User Profile</h3>

        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="size-32 rounded-full border-4 border-gray-50 overflow-hidden shadow-md">
            <Image
              src={user.image}
              alt="Profile"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-pink-50 text-[#FF3AB3] rounded-full text-[10px] font-bold border border-pink-100">
              1:1 Dinner
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-4xl mx-auto">
          {/* Personal Details */}
          <div className="space-y-8">
            <h4 className="text-lg font-black text-gray-900 border-b border-gray-100 pb-2">
              Personal Details
            </h4>
            <div className="space-y-6">
              <DetailRow label="User Name" value={user.name} />
              <DetailRow label="User Email" value="john.doe@example.com" />
              <DetailRow
                label="Preference"
                value="cool, alcolock, introvert, privet restaurant"
              />
            </div>
          </div>

          {/* Account Details */}
          <div className="space-y-8">
            <h4 className="text-lg font-black text-gray-900 border-b border-gray-100 pb-2">
              Account Details
            </h4>
            <div className="space-y-6">
              <DetailRow label="Join Date" value="09/23/2024" />
              <DetailRow label="Total Matches" value="12" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 pt-10 border-t border-gray-50">
          <Button
            onClick={onBack}
            className="h-12 px-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-sm shadow-lg transition-all hover:opacity-90 active:scale-95 cursor-pointer"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start gap-4">
    <span className="text-sm font-bold text-gray-900 min-w-[120px] shrink-0">
      {label}:
    </span>
    <span className="text-sm font-medium text-gray-500 break-words">
      {value}
    </span>
  </div>
);
