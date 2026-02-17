"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pathname: string;
  navLinks: NavLink[];
}

const MobileMenu = ({
  isOpen,
  setIsOpen,
  pathname,
  navLinks,
}: MobileMenuProps) => {
  return (
    <>
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
          <span className="text-white text-xl uppercase tracking-widest">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
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
                    ? "text-white font-bold pl-2 bg-white/10 rounded-lg"
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
              className="w-full py-3 text-center border border-white text-white rounded-lg hover:bg-white hover:text-[#FF3AB3] transition-colors text-base"
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
    </>
  );
};

export default MobileMenu;
