"use client";

import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";

interface PaymentMethodSelectorProps {
  paymentMethod: "paypal" | "card";
  setPaymentMethod: (method: "paypal" | "card") => void;
}

export const PaymentMethodSelector = ({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodSelectorProps) => {
  return (
    <div className="bg-white rounded-md p-8 border border-gray-100 space-y-6 shadow-none">
      <h4 className="text-xl font-black text-gray-900">Payment Method</h4>

      <div className="space-y-4">
        <button
          onClick={() => setPaymentMethod("paypal")}
          className={cn(
            "w-full p-6 rounded-md border flex items-center justify-between transition-all",
            paymentMethod === "paypal"
              ? "border-[#5432C8] bg-purple-50/10"
              : "border-gray-100 hover:border-gray-200",
          )}
        >
          <div className="flex items-center gap-4">
            <span className="italic font-black text-[#003087]">Paypal</span>
          </div>
          <div
            className={cn(
              "size-5 rounded-full border-2 flex items-center justify-center transition-all",
              paymentMethod === "paypal"
                ? "border-[#5432C8]"
                : "border-gray-300",
            )}
          >
            {paymentMethod === "paypal" && (
              <div className="size-2.5 rounded-full bg-[#5432C8]" />
            )}
          </div>
        </button>

        <button
          onClick={() => setPaymentMethod("card")}
          className={cn(
            "w-full p-6 rounded-md border flex items-center justify-between transition-all",
            paymentMethod === "card"
              ? "border-[#5432C8] bg-purple-50/10"
              : "border-gray-100 hover:border-gray-200",
          )}
        >
          <div className="flex items-center gap-4">
            <CreditCard className="size-6 text-red-500" />
            <span className="font-bold text-gray-900">
              Credit Card/Debit Card
            </span>
          </div>
          <div
            className={cn(
              "size-5 rounded-full border-2 flex items-center justify-center transition-all",
              paymentMethod === "card" ? "border-[#5432C8]" : "border-gray-300",
            )}
          >
            {paymentMethod === "card" && (
              <div className="size-2.5 rounded-full bg-[#5432C8]" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};
