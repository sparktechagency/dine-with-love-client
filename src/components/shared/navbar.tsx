"use client";
import logo from "@/assets/logo/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    () => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
      }
      return null;
    },
  );
  const pathname = usePathname();

  useEffect(() => {
    // Listen for storage changes (optional but good for multi-tab)
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

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
          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="hidden sm:block">
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-none font-bold">
                  Dashboard
                </Button>
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 p-1 pr-3 rounded-full transition-all cursor-pointer">
                  <div className="size-8 rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm font-bold hidden md:inline">
                    {user.name}
                  </span>
                </button>
                {/* Simple Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all text-gray-900 z-50">
                  <Link
                    href="/dashboard/settings"
                    className="block px-4 py-2 hover:bg-gray-50 font-medium"
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 font-medium text-red-500 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <Button className="bg-white text-primary px-8 py-2.5 h-11 rounded-md font-bold hover:bg-white/95 transition-all cursor-pointer border-none shadow-none">
                Login
              </Button>
            </Link>
          )}
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
