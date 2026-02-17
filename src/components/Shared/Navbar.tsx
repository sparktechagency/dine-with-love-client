"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

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
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "FAQS", href: "/faqs" },
  ];

  return (
    <nav className="w-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white py-4 px-4 md:px-6 sticky top-0 z-50">
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
            href="/login"
            className="hidden sm:block font-medium hover:text-white/80 transition-colors"
          >
            Login
          </Link>
          <Link href="/compatibility-test">
            <Button className="hidden sm:flex bg-white text-[#B131D4] px-6 py-2 rounded-lg font-bold hover:bg-white/95 transition-all cursor-pointer border-none shadow-none">
              Take Test
            </Button>
          </Link>

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

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pathname={pathname}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default Navbar;
