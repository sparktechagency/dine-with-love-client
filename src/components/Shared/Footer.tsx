"use client";

import { cn } from "@/lib/utils";
import { Apple, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

// Custom HeartInPlate icon component
const HeartInPlate = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative flex items-center justify-center bg-white/20 p-2 rounded-full",
      className,
    )}
  >
    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
      <div className="w-3 h-3 text-white fill-white">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  </div>
);

// Custom Google icon since lucide doesn't have a standard one that matches exactly
const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />
    <path d="M12 12L22 12" />
    <path d="M12 12L12 2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <HeartInPlate />
              <div className="flex flex-col -space-y-1">
                <span className="font-bold text-sm uppercase tracking-wider">
                  Dine with
                </span>
                <span className="font-bold text-sm uppercase tracking-wider">
                  Love
                </span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white transition-colors"
                >
                  FAQS
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white transition-colors"
                >
                  FAQS
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Term of services
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Email Notifications</h3>
            <p className="text-white/80 text-sm mb-6">
              Sign up to our e-mail newsletter to receive the latest news &
              updates.
            </p>
            <div className="flex bg-white rounded-lg overflow-hidden max-w-sm">
              <input
                type="email"
                placeholder="Input your Email"
                className="bg-transparent text-gray-800 px-4 py-3 outline-none grow text-sm placeholder:text-gray-400"
              />
              <button className="bg-[#F8E7E4] text-[#B131D4] px-6 py-3 font-bold text-sm hover:bg-[#f2dad5] transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} dine-with-love All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white hover:text-white/70 transition-colors"
            >
              <Facebook className="w-5 h-5 fill-white" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-white/70 transition-colors"
            >
              <GoogleIcon />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-white/70 transition-colors"
            >
              <Apple className="w-5 h-5 fill-white" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-white/70 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
