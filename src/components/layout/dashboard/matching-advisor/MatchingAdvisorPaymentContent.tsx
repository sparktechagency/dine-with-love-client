"use client";

import { ArrowLeft, CreditCard, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const MatchingAdvisorPaymentContent = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="flex flex-col gap-6 p-2 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-4">
        <Link
          href="/dashboard/matching-advisor"
          className="flex items-center gap-2 text-md font-bold text-gray-900 group"
        >
          <div className="size-8 rounded-full flex items-center justify-center transition-colors group-hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-[#FF3AB3]" />
          </div>
          Submit to advisor
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Summary */}
        <div className="space-y-6">
          <div className="rounded-md border border-gray-100 bg-white p-10 space-y-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-linear-to-tr from-[#FF3AB3] to-[#5432C8] flex items-center justify-center shrink-0">
                <Info className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <p className="font-bold text-sm text-gray-900 leading-snug">
                  This is an additional charge for the service.
                </p>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Once it&apos;s accepted, you can pay, and they will see the
                  matching advisor assigned to them.
                </p>
              </div>
            </div>

            <Separator className="bg-gray-50" />

            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-400 text-sm">Total</span>
              <span className="font-black text-2xl text-gray-900">$50.00</span>
            </div>

            <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-md shadow-none transition-all hover:scale-[1.01] active:scale-[0.99]">
              Pay
            </Button>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="space-y-8">
          <Card className="rounded-md border border-gray-100 shadow-sm p-2">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-md font-bold text-gray-900">
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-4">
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={cn(
                  "w-full p-5 rounded-md border-2 flex items-center justify-between transition-all",
                  paymentMethod === "paypal"
                    ? "border-[#FF3AB3] bg-pink-50/10"
                    : "border-gray-50 hover:border-gray-100",
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="size-8 bg-blue-50 rounded-md flex items-center justify-center italic font-black text-[#003087] text-[10px]">
                    P
                  </div>
                  <span className="font-bold text-gray-700 text-sm">
                    Paypal
                  </span>
                </div>
                <div
                  className={cn(
                    "size-6 rounded-full border-2 flex items-center justify-center transition-all",
                    paymentMethod === "paypal"
                      ? "border-[#FF3AB3]"
                      : "border-gray-100",
                  )}
                >
                  {paymentMethod === "paypal" && (
                    <div className="size-3 rounded-full bg-[#FF3AB3]" />
                  )}
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod("card")}
                className={cn(
                  "w-full p-5 rounded-md border-2 flex items-center justify-between transition-all",
                  paymentMethod === "card"
                    ? "border-[#FF3AB3] bg-pink-50/10"
                    : "border-gray-50 hover:border-gray-100",
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="size-8 bg-red-50 rounded-md flex items-center justify-center">
                    <CreditCard className="size-4 text-red-500" />
                  </div>
                  <span className="font-bold text-gray-700 text-sm">
                    Credit Card/Debit Card
                  </span>
                </div>
                <div
                  className={cn(
                    "size-6 rounded-full border-2 flex items-center justify-center transition-all",
                    paymentMethod === "card"
                      ? "border-[#FF3AB3]"
                      : "border-gray-100",
                  )}
                >
                  {paymentMethod === "card" && (
                    <div className="size-3 rounded-full bg-[#FF3AB3]" />
                  )}
                </div>
              </button>
            </CardContent>
          </Card>

          <Card className="rounded-md border border-gray-100 shadow-sm p-4">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-md font-black text-gray-900">
                  Service Fee
                </CardTitle>
                <span className="font-black text-2xl text-gray-900">$4.99</span>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <FormInput
                id="name"
                label="Card Holder Name"
                placeholder="Enter card holder name"
                className="bg-gray-50/50"
              />
              <FormInput
                id="number"
                label="Card Number *"
                placeholder="**** **** **** ****"
                className="bg-gray-50/50"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  id="expiry"
                  label="Expiration date *"
                  placeholder="Month / Year"
                  className="bg-gray-50/50"
                />
                <FormInput
                  id="cvv"
                  label="CVV / CVC *"
                  placeholder="***"
                  className="bg-gray-50/50"
                />
              </div>
            </CardContent>
            <CardFooter className="w-full p-8 pt-0 flex justify-end gap-4">
              <Button
                variant="outline"
                className="px-8 cursor-pointer h-12 rounded-md font-bold border-[#FF3AB3] text-[#FF3AB3] hover:bg-pink-50 transition-all shadow-none"
              >
                Back
              </Button>
              <Button className="px-8 cursor-pointer h-12 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold shadow-none transition-all hover:scale-[1.01] active:scale-[0.99]">
                pay
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MatchingAdvisorPaymentContent;
