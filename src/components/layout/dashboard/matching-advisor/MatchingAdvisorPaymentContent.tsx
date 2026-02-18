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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
          <div className="rounded-[24px] border border-gray-100 bg-white p-10 space-y-8 shadow-sm">
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

            <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-xl font-bold text-md shadow-none transition-all hover:scale-[1.01] active:scale-[0.99]">
              Pay
            </Button>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="space-y-8">
          <Card className="rounded-[24px] border border-gray-100 shadow-sm p-2">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-md font-bold text-gray-900">
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-4">
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={cn(
                  "w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all",
                  paymentMethod === "paypal"
                    ? "border-[#FF3AB3] bg-pink-50/10"
                    : "border-gray-50 hover:border-gray-100",
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="size-8 bg-blue-50 rounded-lg flex items-center justify-center italic font-black text-[#003087] text-[10px]">
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
                  "w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all",
                  paymentMethod === "card"
                    ? "border-[#FF3AB3] bg-pink-50/10"
                    : "border-gray-50 hover:border-gray-100",
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="size-8 bg-red-50 rounded-lg flex items-center justify-center">
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

          <Card className="rounded-[24px] border border-gray-100 shadow-sm p-4">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-md font-black text-gray-900">
                  Service Fee
                </CardTitle>
                <span className="font-black text-2xl text-gray-900">$4.99</span>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="name"
                  className="text-xs font-bold text-gray-700"
                >
                  Card Holder Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter card holder name"
                  className="rounded-xl h-12 bg-gray-50/50 border-gray-50 focus-visible:ring-pink-100 text-sm font-medium"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="number"
                  className="text-xs font-bold text-gray-700"
                >
                  Card Number *
                </Label>
                <Input
                  id="number"
                  placeholder="**** **** **** ****"
                  className="rounded-xl h-12 bg-gray-50/50 border-gray-50 focus-visible:ring-pink-100 text-sm font-medium"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="expiry"
                    className="text-xs font-bold text-gray-700"
                  >
                    Expiration date *
                  </Label>
                  <Input
                    id="expiry"
                    placeholder="Month / Year"
                    className="rounded-xl h-12 bg-gray-50/50 border-gray-50 focus-visible:ring-pink-100 text-sm font-medium"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="cvc"
                    className="text-xs font-bold text-gray-700"
                  >
                    CVV / CVC *
                  </Label>
                  <Input
                    id="cvc"
                    placeholder="***"
                    className="rounded-xl h-12 bg-gray-50/50 border-gray-50 focus-visible:ring-pink-100 text-sm font-medium"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0 flex justify-between gap-4">
              <Button
                variant="outline"
                className="w-full h-14 rounded-xl font-bold border-[#FF3AB3] text-[#FF3AB3] hover:bg-pink-50 transition-all shadow-none"
              >
                Back
              </Button>
              <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-xl font-bold shadow-none transition-all hover:scale-[1.01] active:scale-[0.99]">
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
