"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface FriendCardProps {
  user: any;
  activeTab: "requests" | "all";
  isSelected: boolean;
  onToggleSelect: (id: number) => void;
}

export const FriendCard = ({
  user,
  activeTab,
  isSelected,
  onToggleSelect,
}: FriendCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-md p-4 border border-gray-100 flex flex-col gap-4 relative transition-all duration-300",
        "hover:bg-[#F9E6E6] hover:border-[#F9E6E6]",
        user.highlight && "bg-pink-50/50 border-pink-100 shadow-none",
      )}
    >
      {activeTab === "all" && (
        <div className="absolute top-6 right-6 z-10">
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => onToggleSelect(user.id)}
            className="size-5 bg-white/80 border-none data-[state=checked]:bg-[#FF3AB3]"
          />
        </div>
      )}

      <div className="relative aspect-4/3 rounded-md overflow-hidden">
        <Image src={user.image} alt={user.name} fill className="object-cover" />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold text-gray-900">{user.name}</h4>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-bold text-gray-400">
              Match {user.match}%
            </span>
            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8]"
                style={{ width: `${user.match}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
          <span>{user.distance}</span>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          {activeTab === "requests" ? (
            <>
              <Button className="w-full h-10 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md border-none shadow-none">
                Accept
              </Button>
              <Button
                variant="outline"
                className="w-full h-10 border-[#5432C8] text-[#FF3AB3] font-bold rounded-md hover:bg-pink-50 transition-colors border-none shadow-none"
              >
                Delete
              </Button>
            </>
          ) : (
            <Link href={`/dashboard/confirm-match`}>
              <Button className="w-full h-10 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md border-none shadow-none">
                Dinner Request
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
