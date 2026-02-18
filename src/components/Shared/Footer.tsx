"use client";
import { Button } from "@/components/ui/button";
import { Apple, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";

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
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="size-10 md:size-12"
              />
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
                  href="/about-us"
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
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
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
            <div className="flex bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Input your Email"
                className="bg-transparent text-gray-800 px-4 py-3 outline-none grow text-sm placeholder:text-gray-400"
              />
              <Button className="bg-[#FF3AB3] hover:bg-[#FF3AB3]/90 text-white px-4 py-3 font-bold text-sm transition-colors cursor-pointer rounded-none h-auto">
                Submit
              </Button>
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
