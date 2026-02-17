"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

interface ActionState {
  success?: boolean;
}

async function verifyEmailAction(
  prevState: ActionState | null,
  formData: FormData,
) {
  const token = formData.get("token");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Verify Email Action with token:", token);
  return { success: true };
}

const VerifyEmailForm = () => {
  const [state, action, isPending] = useActionState(verifyEmailAction, null);
  const router = useRouter();

  // Auto-redirect on success
  useEffect(() => {
    if (state?.success) {
      const timer = setTimeout(() => {
        router.push("/compatibility-test");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state?.success, router]);

  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center">
        {isPending ? (
          <div className="size-20 rounded-full bg-pink-50 flex items-center justify-center animate-pulse">
            <Loader2 className="size-10 text-[#FF3AB3] animate-spin" />
          </div>
        ) : state?.success ? (
          <div className="size-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle2 className="size-10 text-green-500" />
          </div>
        ) : (
          <div className="size-20 rounded-full bg-pink-50 flex items-center justify-center">
            <CheckCircle2 className="size-10 text-[#FF3AB3]" />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-black text-gray-900 font-rubik">
          {isPending
            ? "Verifying Email..."
            : state?.success
              ? "Email Verified!"
              : "Verify Your Email"}
        </h2>
        <p className="text-gray-500 font-medium max-w-sm mx-auto">
          {isPending
            ? "Please wait while we confirm your email address."
            : state?.success
              ? "Thank you! Your email has been successfully verified. Redirecting to compatibility test..."
              : "Click the button below to complete your registration and verify your email address."}
        </p>
      </div>

      {!state?.success && !isPending && (
        <form action={action}>
          <input type="hidden" name="token" value="dummy-token" />
          <Button
            type="submit"
            className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg hover:opacity-95 transition-all shadow-lg text-lg flex items-center justify-center cursor-pointer"
          >
            Verify Email
          </Button>
        </form>
      )}

      {state?.success && (
        <Button
          onClick={() => router.push("/compatibility-test")}
          className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg hover:opacity-95 transition-all shadow-lg text-lg flex items-center justify-center cursor-pointer"
        >
          Take Compatibility Test
        </Button>
      )}
    </div>
  );
};

export default VerifyEmailForm;
