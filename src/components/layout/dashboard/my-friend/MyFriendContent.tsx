"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CheckCircle2, Heart, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { FriendCard } from "./FriendCard";
import { users } from "./mockData";

export const MyFriendContent = () => {
  const [activeTab, setActiveTab] = useState<"requests" | "all">("requests");
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const toggleSelect = (id: number) => {
    setSelectedFriends((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  };

  const handleGroupDinnerRequest = async () => {
    setIsProcessing(true);
    // Simulate process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setShowSuccess(true);
    toast.success("Group dinner request sent!");
  };

  return (
    <section className="space-y-8 animate-in fade-in duration-500 ">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">
          Friend & Friend Requests
        </h2>
        <p className="text-gray-500 font-medium">
          Track and manage your dinner requests
        </p>
      </div>

      <div className="bg-gray-100/50 p-1 rounded-md flex gap-1 w-full max-w-2xl">
        <button
          onClick={() => setActiveTab("requests")}
          className={cn(
            "flex-1 h-12 rounded-md font-bold transition-all cursor-pointer",
            activeTab === "requests"
              ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-none"
              : "text-gray-500 hover:text-gray-700",
          )}
        >
          Friend request
        </button>
        <button
          onClick={() => setActiveTab("all")}
          className={cn(
            "flex-1 h-12 rounded-md font-bold transition-all cursor-pointer",
            activeTab === "all"
              ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-none"
              : "text-gray-500 hover:text-gray-700",
          )}
        >
          All Friend
        </button>
      </div>

      {activeTab === "all" && (
        <div className="flex justify-end items-center gap-2">
          <Checkbox id="select-friend" className="size-5 border-gray-100" />
          <label
            htmlFor="select-friend"
            className="text-sm font-bold text-gray-700 cursor-pointer"
          >
            Select friend
          </label>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pb-32">
        {users.map((user) => (
          <FriendCard
            key={user.id}
            user={user}
            activeTab={activeTab}
            isSelected={selectedFriends.includes(user.id)}
            onToggleSelect={toggleSelect}
          />
        ))}
      </div>

      {activeTab === "all" && selectedFriends.length > 0 && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 w-full max-w-lg px-8">
          <Button
            onClick={handleGroupDinnerRequest}
            disabled={isProcessing}
            className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md text-lg border-none shadow-lg cursor-pointer"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              "Group dinner request"
            )}
          </Button>
        </div>
      )}

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md border-none p-0 overflow-hidden bg-white">
          <div className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] h-32 flex items-center justify-center relative">
            <div className="absolute -bottom-10 size-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <CheckCircle2 className="size-12 text-green-500" />
            </div>
            <Heart className="size-16 text-white/20 absolute -top-4 -right-4 rotate-12" />
            <Heart className="size-12 text-white/10 absolute top-8 left-8 -rotate-12" />
          </div>
          <div className="p-8 pt-14 text-center space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-black text-gray-900 text-center font-rubik">
                Request Confirmed!
              </DialogTitle>
            </DialogHeader>
            <p className="text-gray-500 font-medium">
              Your group dinner request has been sent to your selected friends.
              Prepare for an amazing shared experience!
            </p>
            <Button
              onClick={() => {
                setShowSuccess(false);
                setSelectedFriends([]);
                router.push("/dashboard/my-requests");
              }}
              className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md hover:opacity-95 transition-all shadow-lg text-lg cursor-pointer"
            >
              View My Requests
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
