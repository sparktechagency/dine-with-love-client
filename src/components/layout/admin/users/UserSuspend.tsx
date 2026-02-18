"use client";

import { Button } from "@/components/ui/button";
import { FormTextarea } from "@/components/ui/form-textarea";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface UserSuspendProps {
  user: any;
  onBack: () => void;
}

export const UserSuspend = ({ user, onBack }: UserSuspendProps) => {
  const handleSuspend = () => {
    toast.error(`User ${user.name} has been suspended.`);
    onBack();
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="size-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <ArrowLeft className="size-6 text-[#9128E6]" />
        </button>
        <h2 className="text-3xl font-black text-gray-900">Suspend User</h2>
      </div>

      <div className="bg-white rounded-md border border-gray-100 p-10 py-16 shadow-sm min-h-[400px]">
        <div className="p-10 rounded-md border border-gray-50 bg-gray-50/20 space-y-8 max-w-4xl">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-[#FF3AB3]">
              Are you sure you want to suspend {user.name}? This action will
              prevent the user from accessing their account.
            </h3>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              Reason for Suspensions.
            </label>
            <FormTextarea
              placeholder="Write here"
              className="min-h-[160px] bg-white border-gray-100 rounded-md focus:ring-[#FF3AB3]"
            />
          </div>

          <div className="flex items-center gap-6 pt-4">
            <Button
              variant="outline"
              onClick={onBack}
              className="h-12 px-12 rounded-md border-[#5432C8] text-[#5432C8] font-bold shadow-none hover:bg-purple-50 transition-all cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSuspend}
              className="h-12 px-12 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold shadow-lg transition-all hover:opacity-90 active:scale-95 cursor-pointer"
            >
              Suspend User
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
