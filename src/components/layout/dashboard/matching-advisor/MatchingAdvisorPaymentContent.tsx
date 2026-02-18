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
    <div className="flex flex-col gap-6 p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/matching-advisor"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-2xl font-bold text-primary">Special Advisor</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Order Summary */}
        <div className="space-y-6">
          <div className="rounded-md border bg-card text-card-foreground p-6">
            <h2 className="text-lg font-semibold mb-4">Submit to advisor</h2>
            <div className="flex items-start gap-4 rounded-md bg-muted/50 p-4">
              <Info className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium text-sm">
                  This is an additional charge for the service.
                </p>
                <p className="text-xs text-muted-foreground">
                  Once it&apos;s accepted, you can pay. And they will see the
                  matching advisor assigned to them.
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex items-center justify-between text-sm">
              <span>Service Fee</span>
              <span>$4.99</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg mt-4">
              <span>Total</span>
              <span>$53.99</span>
            </div>

            <Button className="w-full mt-6 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md">
              Pay
            </Button>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="space-y-6">
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="grid gap-4">
                <Label
                  htmlFor="paypal"
                  className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <span>Paypal</span>
                  </div>
                  {/* Paypal Logo Placeholder */}
                  <div className="h-6 w-8 bg-blue-100 rounded-sm"></div>
                </Label>

                <Label
                  htmlFor="card"
                  className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="card" id="card" />
                    <span>Credit Card/Debit Card</span>
                  </div>
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="rounded-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Service Fee</CardTitle>
                <span className="font-bold text-lg">$4.99</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Card Holder Name</Label>
                <Input
                  id="name"
                  placeholder="Enter card holder name"
                  className="rounded-md"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Card Number</Label>
                <Input
                  id="number"
                  placeholder="0000 0000 0000 0000"
                  className="rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input
                    id="expiry"
                    placeholder="Month / Year"
                    className="rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVV / CVC</Label>
                  <Input id="cvc" placeholder="***" className="rounded-md" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-4">
              <Button variant="outline" className="w-full rounded-md">
                Back
              </Button>
              <Button className="w-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md">
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
