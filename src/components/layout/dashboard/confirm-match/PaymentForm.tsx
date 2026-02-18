"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormInput } from "@/components/ui/form-input";
import { CheckCircle2, Heart, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const PaymentForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handlePay = async () => {
    setIsProcessing(true);
    // Simulate transaction
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setShowSuccess(true);
    toast.success("Payment successful!");
  };

  return (
    <>
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
              disabled={isProcessing}
              onClick={() => router.back()}
              className="h-14 rounded-md font-bold border-[#FF3AB3] text-[#FF3AB3] shadow-none cursor-pointer"
            >
              Back
            </Button>
            <Button
              onClick={handlePay}
              disabled={isProcessing}
              className="h-14 rounded-md font-bold bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white border-none shadow-none cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Pay Now"
              )}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md border-none p-0 overflow-hidden bg-white">
          <div className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] h-32 flex items-center justify-center relative">
            <div className="absolute -bottom-10 size-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <CheckCircle2 className="size-12 text-green-500" />
            </div>
            <Heart className="size-16 text-white/20 absolute -top-4 -right-4 rotate-12" />
            <Heart className="size-12 text-white/10 absolute top-8 left-8 -rotate-12" />
          </div>
          <div className="p-8 pt-14 text-center space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-black text-gray-900 text-center font-rubik">
                Payment Successful!
              </DialogTitle>
            </DialogHeader>
            <p className="text-gray-500 font-medium">
              Your match has been confirmed. You can now start communicating and
              planning your dinner date.
            </p>
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md hover:opacity-95 transition-all shadow-lg text-lg cursor-pointer"
            >
              Go to Dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
