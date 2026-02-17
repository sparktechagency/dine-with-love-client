"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

interface ActionState {
  error?: string;
  success?: boolean;
}

async function resetPasswordAction(
  prevState: ActionState | null,
  formData: FormData,
) {
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Reset Password Action:", { password });
  return { success: true };
}

const ResetPasswordForm = () => {
  const [state, action, isPending] = useActionState(resetPasswordAction, null);

  return (
    <div className="space-y-12">
      <Link
        href="/verify-otp"
        className="inline-flex items-center justify-center size-10 rounded-full border border-gray-100 text-[#FF3AB3] hover:bg-pink-50 transition-colors"
      >
        <ArrowLeft className="size-5" />
      </Link>

      <div className="space-y-4">
        <h2 className="text-3xl font-black text-gray-900 font-rubik">
          Reset Password
        </h2>
        <p className="text-gray-500 font-medium">
          You can now reset your password.
        </p>
      </div>

      <form action={action} className="space-y-8">
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          icon={Lock}
          required
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="********"
          icon={Lock}
          required
        />

        {state?.error && (
          <p className="text-sm font-bold text-red-500 text-center bg-red-50 py-3 rounded-lg border border-red-100">
            {state.error}
          </p>
        )}

        {state?.success && (
          <p className="text-sm font-bold text-green-600 text-center bg-green-50 py-3 rounded-lg border border-green-100">
            Password reset successful! You can now{" "}
            <Link href="/login" className="underline">
              login
            </Link>
            .
          </p>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg hover:opacity-95 transition-all shadow-lg text-lg flex items-center justify-center disabled:opacity-50 cursor-pointer"
        >
          {isPending ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
