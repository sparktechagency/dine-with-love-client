"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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

  return (
    <Sidebar className="border-none bg-white p-2">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-12 rounded-lg bg-linear-to-br from-[#FF3AB3] to-[#5432C8] flex items-center justify-center">
            <span className="text-white font-black text-sm">glint</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2 mt-4">
        <SidebarMenu className="gap-2">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={cn(
                    "h-12 px-4 rounded-lg font-bold text-gray-500 transition-colors border-none shadow-none",
                    isActive
                      ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white hover:text-white"
                      : "hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <Link href={item.url} className="flex items-center gap-3">
                    <item.icon className="size-5" />
                    <span>{item.title}</span>
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
            <SidebarMenuButton className="h-12 px-4 rounded-lg font-bold text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors border-none shadow-none">
              <div className="flex items-center gap-3">
                <LogOut className="size-5" />
                <span>Logout</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
