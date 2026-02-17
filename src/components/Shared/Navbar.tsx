"use client";

import { cn } from "@/lib/utils"; // Added cn import
import Link from "next/link";

// Custom HeartInPlate icon component
const HeartInPlate = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative flex items-center justify-center bg-white/20 p-2 rounded-full",
      className,
    )}
  >
    <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
      <div className="w-4 h-4 text-white fill-white">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <nav className="w-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <HeartInPlate /> {/* Replaced Utensils with HeartInPlate */}
          <div className="flex flex-col -space-y-1">
            <span className="font-bold text-lg leading-tight uppercase tracking-wider">
              Dine with
            </span>
            <span className="font-bold text-lg leading-tight uppercase tracking-wider">
              Love
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-white/80 transition-colors"
          >
            How to it works
          </Link>
          <Link
            href="/hire-advisor"
            className="hover:text-white/80 transition-colors"
          >
            Hire Advisor
          </Link>
          <Link href="/faqs" className="hover:text-white/80 transition-colors">
            FAQS
          </Link>
          <Link href="/test" className="hover:text-white/80 transition-colors">
            Test
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Link
            href="/sign-in"
            className="font-medium hover:text-white/80 transition-colors"
          >
            Sign In
          </Link>
          <button className="bg-white text-[#B131D4] px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-sm">
            Take Test
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
