"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PaymentForm } from "./components/PaymentForm";
import { PaymentMethodSelector } from "./components/PaymentMethodSelector";
import { SummaryCard } from "./components/SummaryCard";

export const ConfirmMatchContent = () => {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pb-20">
        {/* Left Column: Summary */}
        <SummaryCard />

        {/* Right Column: Payment & Details */}
        <div className="space-y-8">
          <PaymentMethodSelector
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};
