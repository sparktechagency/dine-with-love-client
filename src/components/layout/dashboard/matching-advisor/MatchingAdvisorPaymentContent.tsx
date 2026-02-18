"use client";

import { ArrowLeft, CreditCard, Info } from "lucide-react";
import Link from "next/link";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const MatchingAdvisorPaymentContent = () => {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/matching-advisor"
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#FF3AB3] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Special Advisor</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        {/* Left Column: Order Summary */}
        <div className="space-y-6">
          <div className="rounded-md border border-gray-100 bg-white p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Submit to advisor
            </h2>
            <div className="flex items-start gap-4 rounded-md bg-pink-50/50 p-6 border border-pink-100">
              <Info className="h-5 w-5 text-[#FF3AB3] mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="font-bold text-sm text-gray-900">
                  This is an additional charge for the service.
                </p>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Once it&apos;s accepted, you can pay. And they will see the
                  matching advisor assigned to them.
                </p>
              </div>
            </div>

            <Separator className="my-8 bg-gray-100" />

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-bold text-gray-500">
                <span>Service Fee</span>
                <span className="text-gray-900">$4.99</span>
              </div>
              <div className="flex items-center justify-between font-black text-2xl text-gray-900 mt-6 pt-6 border-t border-gray-100">
                <span>Total</span>
                <span>$53.99</span>
              </div>
            </div>

            <Button className="w-full h-14 mt-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-lg shadow-none">
              Pay
            </Button>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="space-y-6">
          <Card className="rounded-md border border-gray-100 shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-gray-900">
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="grid gap-4">
                <div className="relative">
                  <RadioGroupItem
                    value="paypal"
                    id="paypal"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="paypal"
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 cursor-pointer hover:bg-gray-50 transition-all peer-data-[state=checked]:border-[#FF3AB3] peer-data-[state=checked]:bg-pink-50/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full border border-gray-300 peer-data-[state=checked]:border-[#FF3AB3] peer-data-[state=checked]:bg-[#FF3AB3]" />
                      <span className="font-bold text-gray-700">Paypal</span>
                    </div>
                    <div className="h-6 w-8 bg-blue-100 rounded-sm italic font-black text-[10px] flex items-center justify-center text-blue-600">
                      PP
                    </div>
                  </Label>
                </div>

                <div className="relative">
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="card"
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 cursor-pointer hover:bg-gray-50 transition-all peer-data-[state=checked]:border-[#FF3AB3] peer-data-[state=checked]:bg-pink-50/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full border border-gray-300" />
                      <span className="font-bold text-gray-700">
                        Credit Card/Debit Card
                      </span>
                    </div>
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="rounded-md border border-gray-100 shadow-none">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-900">
                  Service Fee
                </CardTitle>
                <span className="font-black text-xl text-gray-900">$4.99</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-bold text-gray-700">
                  Card Holder Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter card holder name"
                  className="rounded-md h-12"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number" className="font-bold text-gray-700">
                  Card Number
                </Label>
                <Input
                  id="number"
                  placeholder="0000 0000 0000 0000"
                  className="rounded-md h-12"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry" className="font-bold text-gray-700">
                    Expiration Date
                  </Label>
                  <Input
                    id="expiry"
                    placeholder="Month / Year"
                    className="rounded-md h-12"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc" className="font-bold text-gray-700">
                    CVV / CVC
                  </Label>
                  <Input
                    id="cvc"
                    placeholder="***"
                    className="rounded-md h-12"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-4 pt-4 pb-8">
              <Button
                variant="outline"
                className="w-full h-12 rounded-md font-bold border-gray-200 hover:bg-gray-50 text-gray-700 shadow-none"
              >
                Back
              </Button>
              <Button className="w-full h-12 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold shadow-none">
                Pay
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MatchingAdvisorPaymentContent;
