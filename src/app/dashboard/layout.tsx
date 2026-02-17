"use client";
import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isCompleted = localStorage.getItem("compatibility_test_completed");
      if (!isCompleted) {
        router.push("/compatibility-test");
      }
    }
  }, [router]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col bg-[#FCFCFD] overflow-hidden">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex h-20 shrink-0 items-center justify-between px-4 md:px-8 bg-white border-b border-gray-100">
          <div className="flex items-center gap-2 md:gap-4">
            <SidebarTrigger />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-6 flex-1 max-w-2xl px-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-12 pl-10 pr-2 rounded-lg border border-gray-100 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-lg bg-pink-50 text-[#FF3AB3] hover:bg-pink-100 relative shadow-none border-none"
            >
              <Bell className="size-5" />
              <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full border-2 border-white" />
            </Button>
            <div className="size-10 rounded-lg overflow-hidden border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
                alt="Avatar"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-amber-300">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
