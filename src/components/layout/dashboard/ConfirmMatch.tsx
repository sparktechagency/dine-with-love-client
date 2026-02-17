"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowLeft, CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ConfirmMatch = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "card">("card");

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-3 text-gray-900 font-bold hover:text-primary transition-colors"
      >
        <ArrowLeft className="size-6" />
        <span className="text-xl">Confirm your Match</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Summary */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-8 shadow-none">
          <div className="flex items-center gap-6 p-6 bg-gray-50/50 rounded-xl">
            <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
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

          <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-xl text-lg border-none shadow-none mt-4">
            Proceed to Payment
          </Button>
        </div>

        {/* Right Column: Payment & Details */}
        <div className="space-y-8">
          {/* Payment Method Selection */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6 shadow-none">
            <h4 className="text-xl font-black text-gray-900">Payment Method</h4>

            <div className="space-y-4">
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={cn(
                  "w-full p-6 rounded-xl border flex items-center justify-between transition-all",
                  paymentMethod === "paypal"
                    ? "border-[#5432C8] bg-purple-50/10"
                    : "border-gray-100 hover:border-gray-200",
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="italic font-black text-[#003087]">
                    Paypal
                  </span>
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
                  "w-full p-6 rounded-xl border flex items-center justify-between transition-all",
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
                    paymentMethod === "card"
                      ? "border-[#5432C8]"
                      : "border-gray-300",
                  )}
                >
                  {paymentMethod === "card" && (
                    <div className="size-2.5 rounded-full bg-[#5432C8]" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Card Details */}
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
                  <Input
                    placeholder="Month / Year"
                    className="h-12 rounded-xl"
                  />
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
        </div>
      </div>
    </div>
  );
};

export default ConfirmMatch;
