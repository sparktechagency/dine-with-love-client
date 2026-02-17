"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

interface ActionState {
  error?: string;
  success?: boolean;
}

// Mock action for demonstration
async function loginAction(prevState: ActionState | null, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Simulate validation or API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Login Action:", { email, password });

  // Return error if needed
  if (password === "error") {
    return { error: "Invalid credentials" };
  }

  return { success: true };
}

const SignInForm = () => {
  const [state, action, isPending] = useActionState(loginAction, null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-black text-gray-900 mb-2 font-rubik">
          Login
        </h2>
        <p className="text-gray-500 font-medium">
          Enter your details to get access.
        </p>
      </div>

      <form action={action} className="space-y-6">
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          icon={Mail}
          required
        />

        <div className="space-y-1">
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            icon={Lock}
            required
          />
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-bold text-gray-400 hover:text-[#FF3AB3] transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {state?.error && (
          <p className="text-sm font-bold text-red-500 text-center bg-red-50 py-3 rounded-lg border border-red-100">
            {state.error}
          </p>
        )}

        {/* Social Login Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">
              or continue with
            </span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-3 h-14 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all cursor-pointer shadow-none"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              width={24}
              height={24}
              alt="Google"
            />
            <span className="font-bold text-gray-700 hidden sm:inline">
              Google
            </span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-3 h-14 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all cursor-pointer shadow-none"
          >
            <Image
              src="https://www.svgrepo.com/show/503173/apple-logo.svg"
              width={24}
              height={24}
              alt="Apple"
            />
            <span className="font-bold text-gray-700 hidden sm:inline">
              Apple
            </span>
          </Button>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg hover:opacity-95 transition-all shadow-lg text-lg flex items-center justify-center disabled:opacity-50 cursor-pointer"
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>

        <p className="text-center text-gray-500 font-medium">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#FF3AB3] font-black hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
