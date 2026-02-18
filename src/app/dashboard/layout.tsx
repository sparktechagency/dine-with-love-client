"use client";
import { AppSidebar } from "@/components/layout/dashboard/AppSidebar";
import DashboardHeader from "@/components/layout/dashboard/DashboardHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
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
    <SidebarProvider
      style={{ "--sidebar-width": "18rem" } as React.CSSProperties}
    >
      <div className="flex min-h-screen w-full bg-white">
        <AppSidebar />
        <SidebarInset className="flex flex-col bg-white overflow-hidden">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto pt-6 pb-20 px-6 bg-[#F7F7F7]">
            <div className="w-full">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
