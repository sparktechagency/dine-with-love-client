/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormInput } from "@/components/ui/form-input";
import { Lock, Mail, MapPin, User } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

// Mock register action
async function registerAction(prevState: any, formData: FormData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const address = formData.get("address");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  // Basic validation check (simulating Zod result)
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Register Action:", { fullName, email, address });

  return { success: true };
}

const SignUpForm = () => {
  const [state, action, isPending] = useActionState(registerAction, null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-black text-gray-900 mb-2 font-rubik">
          Sign Up
        </h2>
        <p className="text-gray-500 font-medium">
          Enter your details to get access.
        </p>
      </div>

      <form action={action} className="space-y-3">
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="Enter name"
          icon={User}
          required
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          icon={Mail}
          required
        />

        <FormInput
          label="Address"
          name="address"
          placeholder="Enter address"
          icon={MapPin}
          required
        />

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

        {/* Social Login Divider */}
        <div className="relative py-2">
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
          <button
            type="button"
            className="flex items-center justify-center gap-2 h-12 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="size-5"
              alt="Google"
            />
            <span className="font-bold text-gray-700 text-sm">Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 h-12 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/442983/apple-logo.svg"
              className="size-5"
              alt="Apple"
            />
            <span className="font-bold text-gray-700 text-sm">Apple</span>
          </button>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg hover:opacity-95 transition-all shadow-lg text-lg flex items-center justify-center disabled:opacity-50 cursor-pointer mt-4"
        >
          {isPending ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-center text-gray-500 font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#FF3AB3] font-black hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
