"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Custom HeartInPlate icon component
const HeartInPlate = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative flex items-center justify-center bg-white/20 p-2 rounded-full",
      className,
    )}
  >
    <div className="size-8 border-2 border-white rounded-full flex items-center justify-center">
      <div className="size-4 text-white fill-white">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Hire Advisor", href: "/hire-advisor" },
    { label: "FAQS", href: "/faqs" },
  ];

  return (
    <nav className="w-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white py-4 px-4 md:px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <HeartInPlate className="size-10 md:size-12" />
          <div className="flex flex-col -space-y-1">
            <span className=" text-sm md:text-lg leading-tight uppercase tracking-wider">
              Dine with
            </span>
            <span className=" text-sm md:text-lg leading-tight uppercase tracking-wider">
              Love
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-all duration-300 relative py-1",
                  isActive
                    ? "text-white font-bold brightness-110 underline decoration-2 underline-offset-4"
                    : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Section / Hamburger */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link
            href="/sign-in"
            className="hidden sm:block font-medium hover:text-white/80 transition-colors"
          >
            Sign In
          </Link>
          <button className="hidden sm:block bg-white text-[#B131D4] px-6 py-2 rounded-lg  hover:bg-opacity-90 transition-all shadow-sm">
            Take Test
          </button>

          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 z-40",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-linear-to-b from-[#FF3AB3] to-[#5432C8] lg:hidden z-50 transform transition-transform duration-300 ease-in-out p-6 shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center mb-10">
          <span className=" text-xl uppercase tracking-widest">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4 font-semibold text-lg">
          {navLinks?.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2 border-b border-white/10 block text-base font-medium transition-all",
                  isActive
                    ? "text-white font-bold pl-2 bg-white/10 rounded-md"
                    : "text-white/70 hover:pl-2",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-6 flex flex-col gap-4">
            <Link
              href="/sign-in"
              className="w-full py-3 text-center border border-white rounded-lg hover:bg-white hover:text-[#FF3AB3] transition-colors text-base"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <button
              className="w-full py-3 bg-white text-[#B131D4] rounded-lg text-base"
              onClick={() => setIsOpen(false)}
            >
              Take Test
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
