"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
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
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="size-10 md:size-12"
          />
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
          <Link href="/login">
            <Button className=" bg-white text-primary px-6 py-2.5 h-10 rounded-md font-bold hover:bg-white/95 transition-all cursor-pointer border-none shadow-none">
              Login
            </Button>
          </Link>
          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
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
