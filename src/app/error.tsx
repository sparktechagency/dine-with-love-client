"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="size-24 bg-red-50 rounded-full flex items-center justify-center mb-8">
        <AlertTriangle className="size-12 text-red-500" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 font-rubik text-center">
        Something went wrong!
      </h1>
      <p className="text-gray-500 text-center max-w-md mb-10 leading-relaxed">
        We encountered an unexpected appetite for error. Our team has been
        notified. Please try refreshing the page or checking back later.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => reset()}
          className="flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md hover:opacity-90 transition-all shadow-lg text-lg h-14"
        >
          <RefreshCw className="size-5" />
          Try Again
        </Button>
        <Link
          href="/"
          className="px-8 py-3 border border-gray-200 text-gray-700 font-bold rounded-md hover:bg-gray-50 transition-all text-center text-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
