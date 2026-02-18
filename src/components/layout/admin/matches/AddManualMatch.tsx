"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface AddManualMatchProps {
  onBack: () => void;
}

export const AddManualMatch = ({ onBack }: AddManualMatchProps) => {
  const handleSubmit = () => {
    toast.success("Match created successfully!");
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
        <h2 className="text-3xl font-black text-gray-900">Add Manual Match</h2>
      </div>

      <div className="bg-white rounded-md border border-gray-100 p-10 py-16 shadow-sm">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Select users
            </label>
            <FormInput
              placeholder="Choose user to match"
              className="h-12 bg-white border-gray-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Tag Advisor Match
            </label>
            <FormInput
              placeholder="Tag Advisor Match"
              className="h-12 bg-white border-gray-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Description
            </label>
            <FormTextarea
              placeholder="Write here"
              className="min-h-[160px] bg-white border-gray-100"
            />
          </div>

          <div className="flex items-center justify-center gap-6 pt-10">
            <Button
              variant="outline"
              onClick={onBack}
              className="h-12 px-14 rounded-md border-[#5432C8] text-[#5432C8] font-bold shadow-none hover:bg-purple-50 transition-all cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="h-12 px-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold shadow-lg transition-all hover:opacity-90 active:scale-95 cursor-pointer"
            >
              See Match
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
