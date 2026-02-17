/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormInput } from "@/components/ui/form-input";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

async function forgotPasswordAction(prevState: any, formData: FormData) {
  const email = formData.get("email");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Forgot Password Action:", { email });
  return { success: true };
}

const ForgotPasswordForm = () => {
  const [state, action, isPending] = useActionState(forgotPasswordAction, null);

  return (
    <div className="space-y-12">
      <Link
        href="/login"
        className="inline-flex items-center justify-center size-10 rounded-full border border-gray-100 text-[#FF3AB3] hover:bg-pink-50 transition-colors"
      >
        <ArrowLeft className="size-5" />
      </Link>

      <div className="space-y-4">
        <h2 className="text-3xl font-black text-gray-900 font-rubik">
          Forgot Password
        </h2>
        <p className="text-gray-500 font-medium leading-relaxed">
          We will send an OTP to your registered email address or phone number.
        </p>
      </div>

      <form action={action} className="space-y-10">
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          icon={Mail}
          required
        />

        {state?.success && (
          <p className="text-sm font-bold text-green-600 text-center bg-green-50 py-3 rounded-lg border border-green-100">
            OTP sent successfully! Redirecting...
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg hover:opacity-95 transition-all shadow-lg text-lg flex items-center justify-center disabled:opacity-50 cursor-pointer"
        >
          {isPending ? "Sending..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
