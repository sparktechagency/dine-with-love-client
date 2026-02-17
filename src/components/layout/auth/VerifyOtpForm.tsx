"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";

async function verifyOtpAction(prevState: any, formData: FormData) {
  const otp = formData.get("otp");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Verify OTP Action:", { otp });
  return { success: true };
}

const VerifyOtpForm = () => {
  const [state, action, isPending] = useActionState(verifyOtpAction, null);
  const [timer, setTimer] = useState(179); // 02:59
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-12">
      <Link
        href="/forgot-password"
        className="inline-flex items-center justify-center size-10 rounded-full border border-gray-100 text-[#FF3AB3] hover:bg-pink-50 transition-colors"
      >
        <ArrowLeft className="size-5" />
      </Link>

      <div className="space-y-4">
        <h2 className="text-3xl font-black text-gray-900 font-rubik">
          Verify OTP
        </h2>
        <p className="text-gray-500 font-medium">
          We have sent an OTP to{" "}
          <span className="text-[#FF3AB3]">xyz@gmail.com</span>
        </p>
      </div>

      <form action={action} className="space-y-12">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-2 sm:gap-4 relative">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`size-12 sm:size-14 border-2 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                  otp[i]
                    ? "border-[#FF3AB3] bg-pink-50/30 text-gray-900"
                    : "border-gray-100 text-gray-400"
                }`}
              >
                {otp[i] || ""}
              </div>
            ))}
            <input
              type="text"
              name="otp"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              className="absolute inset-0 opacity-0 cursor-pointer"
              autoFocus
            />
          </div>

          <div className="flex justify-between items-center text-sm font-bold">
            <button type="button" className="text-[#FF3AB3] hover:underline">
              Resend OTP
            </button>
            <span className="text-gray-400">{formatTime(timer)}</span>
          </div>
        </div>

        {state?.success && (
          <p className="text-sm font-bold text-green-600 text-center bg-green-50 py-3 rounded-xl border border-green-100">
            OTP Verified! Proceeding to reset password...
          </p>
        )}

        <button
          type="submit"
          disabled={isPending || otp.length < 6}
          className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-2xl hover:opacity-95 transition-all shadow-lg text-lg flex items-center justify-center disabled:opacity-50 cursor-pointer"
        >
          {isPending ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
};

export default VerifyOtpForm;
