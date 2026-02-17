"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  LogOut,
  MailOpen,
  MessageSquare,
  Settings,
  UserCheck,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Requests",
    url: "/dashboard/my-requests",
    icon: MailOpen,
  },
  {
    title: "Chat",
    url: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    title: "Matching Advisor",
    url: "/dashboard/matching-advisor",
    icon: UserCheck,
  },
  {
    title: "My friend",
    url: "/dashboard/my-friend",
    icon: UserPlus,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export const AppSidebar = () => {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-none bg-white p-3">
      <SidebarHeader className="p-4 flex justify-center">
        <Link
          href="/"
          className="flex items-center gap-3 overflow-hidden transition-all"
        >
          <div className="size-12 shrink-0 rounded-xl bg-linear-to-br from-[#FF3AB3] to-[#5432C8] flex items-center justify-center shadow-lg shadow-pink-100">
            <span className="text-white font-black text-sm">glint</span>
          </div>
          {!isCollapsed && (
            <span className="text-2xl font-black text-gray-900 animate-in slide-in-from-left-2 fade-in duration-300">
              glint
            </span>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2 mt-8">
        <SidebarMenu className="gap-3">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                  className={cn(
                    "h-14 px-4 rounded-xl font-bold text-gray-500 transition-all border-none shadow-none",
                    isActive
                      ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white"
                      : "hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <Link href={item.url} className="flex items-center gap-4">
                    <item.icon className="size-6 shrink-0" />
                    {!isCollapsed && (
                      <span className="text-base animate-in slide-in-from-left-2 fade-in duration-300">
                        {item.title}
                      </span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              className="h-14 px-4 rounded-xl font-bold text-red-500 hover:bg-red-50 hover:text-red-600 transition-all border-none shadow-none"
            >
              <div className="flex items-center gap-4">
                <LogOut className="size-6 shrink-0" />
                {!isCollapsed && (
                  <span className="text-base animate-in slide-in-from-left-2 fade-in duration-300">
                    Logout
                  </span>
                )}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
