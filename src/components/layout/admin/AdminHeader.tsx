"use client";

import { FormInput } from "@/components/ui/form-input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminRouteToTitle: Record<string, string> = {
  "/admin": "Admin Dashboard",
  "/admin/users": "User Management",
  "/admin/matches": "Match Management",
  "/admin/bookings": "Booking Requests",
  "/admin/payments": "Payments",
  "/admin/advisor-requests": "Special Advisor Requests",
  "/admin/notifications": "Notifications",
  "/admin/settings": "Settings",
};

const AdminHeader = () => {
  const pathname = usePathname();
  const title = adminRouteToTitle[pathname] || "Admin Dashboard";

  return (
    <header className="sticky top-0 z-40 w-full h-20 shrink-0 bg-white border-b border-gray-100 px-6 flex items-center justify-between gap-4">
      {/* Left: Nav & Context */}
      <div className="flex items-center gap-6">
        <SidebarTrigger className="size-10 text-primary rounded-md border border-primary transition-all hover:bg-primary/10 cursor-pointer" />
        <div className="h-4 w-px bg-gray-200 hidden sm:block" />
        <h2 className="text-xl font-black text-gray-900 hidden md:block">
          {title}
        </h2>
      </div>

      {/* Right: Search & Actions */}
      <div className="flex items-center gap-6 flex-1 justify-end">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center relative max-w-sm w-full">
          <FormInput
            icon={Search}
            placeholder="Search matching advisor..."
            className="w-full h-11 bg-gray-50/50 border border-gray-100 rounded-md shadow-none"
          />
        </div>

        {/* <div className="flex items-center gap-3">
          <Link href="/admin/notifications">
            <button className="size-10 text-[#FF3AB3] rounded-md border border-[#FF3AB3] transition-all hover:bg-pink-50 cursor-pointer flex justify-center items-center relative">
              <Bell className="size-5" />
              <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border border-white" />
            </button>
          </Link>

          <div className="size-10 rounded-md overflow-hidden border border-gray-100 cursor-pointer transition-all hover:opacity-80">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"
              alt="Admin Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div> */}
        <div className="flex items-center gap-3">
          <Link href="/admin/notifications">
            <button className="size-10 text-primary rounded-md border border-primary transition-all hover:bg-primary/10 cursor-pointer flex justify-center items-center relative">
              <Bell className="size-5" />
              <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border border-white" />
            </button>
          </Link>

          <div className="size-10 rounded-md overflow-hidden border border-gray-100 cursor-pointer transition-all hover:opacity-80">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
