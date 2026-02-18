"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface BookDinnerFormProps {
  onBack: () => void;
}

export const BookDinnerForm = ({ onBack }: BookDinnerFormProps) => {
  const handleConfirm = () => {
    toast.success("Dinner booked successfully!");
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
        <h2 className="text-3xl font-black text-gray-900">Book Dinner</h2>
      </div>

      <div className="bg-white rounded-md border border-gray-100 p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Restaurant Name
            </label>
            <FormInput
              placeholder="Enter Restaurant Name"
              className="h-12 bg-white border-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Enter Location
            </label>
            <FormInput
              placeholder="Enter Location"
              className="h-12 bg-white border-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Time</label>
            <FormInput
              placeholder="dd-mm-yyyy"
              type="time"
              className="h-12 bg-white border-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Date</label>
            <FormInput
              placeholder="dd-mm-yyyy"
              type="date"
              className="h-12 bg-white border-gray-100"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-6 pt-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="h-12 px-10 rounded-md border-[#FF3AB3] text-[#FF3AB3] font-bold shadow-none hover:bg-pink-50 transition-all cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="h-12 px-10 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold shadow-lg transition-all hover:opacity-90 active:scale-95 cursor-pointer"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};
