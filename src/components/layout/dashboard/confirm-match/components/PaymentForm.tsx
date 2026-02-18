"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const PaymentForm = () => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6 shadow-none">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-black text-gray-900">Service Fee</h4>
        <span className="text-2xl font-black text-gray-900">$4.99</span>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            Card Holder Name
          </label>
          <Input
            placeholder="Enter card holder name"
            className="h-12 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">
            Card Number *
          </label>
          <Input
            placeholder="**** **** **** ****"
            className="h-12 rounded-xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Expiration date *
            </label>
            <Input placeholder="Month / Year" className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              CVV / CVC *
            </label>
            <Input placeholder="***" className="h-12 rounded-xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <Button
            variant="outline"
            className="h-14 rounded-xl font-bold border-[#FF3AB3] text-[#FF3AB3] shadow-none"
          >
            Back
          </Button>
          <Button className="h-14 rounded-xl font-bold bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white border-none shadow-none">
            pay
          </Button>
        </div>
      </div>
    </div>
  );
};
