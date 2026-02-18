"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";

export const PaymentForm = () => {
  return (
    <div className="bg-white rounded-md p-8 border border-gray-100 space-y-6 shadow-none">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-black text-gray-900">Service Fee</h4>
        <span className="text-2xl font-black text-gray-900">$4.99</span>
      </div>

      <div className="space-y-6">
        <FormInput
          label="Card Holder Name"
          placeholder="Enter card holder name"
          className="h-12 bg-white"
        />

        <FormInput
          label="Card Number *"
          placeholder="**** **** **** ****"
          className="h-12 bg-white"
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="Expiration date *"
            placeholder="Month / Year"
            className="h-12 bg-white"
          />
          <FormInput
            label="CVV / CVC *"
            placeholder="***"
            className="h-12 bg-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <Button
            variant="outline"
            className="h-14 rounded-md font-bold border-[#FF3AB3] text-[#FF3AB3] shadow-none"
          >
            Back
          </Button>
          <Button className="h-14 rounded-md font-bold bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white border-none shadow-none">
            pay
          </Button>
        </div>
      </div>
    </div>
  );
};
