"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
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
    title: "Inbox",
    url: "/dashboard/inbox",
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
    <Sidebar collapsible="icon" className="border-none">
      <div className="flex flex-col h-full">
        {/* Header - Logo */}
        <SidebarHeader
          className={cn(
            "h-20 border-b border-gray-100 flex  justify-center items-center transition-all",
          )}
        >
          <Link href="/" className="flex items-center">
            {isCollapsed ? (
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold text-lg">
                DineWithLove
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-primary truncate">
                  DineWithLove
                </span>
              </div>
            )}
          </Link>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent className="flex-1 py-2 px-3 overflow-y-auto no-scrollbar">
          <SidebarGroup>
            <SidebarMenu className="space-y-3">
              {items.map((item) => {
                const active = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <Link href={item.url} className="w-full block">
                      <SidebarMenuButton
                        tooltip={isCollapsed ? item.title : undefined}
                        className={cn(
                          "w-full h-12.5 cursor-pointer flex items-center transition-none",
                          isCollapsed ? "justify-center p-0" : "px-3 gap-3",
                          isCollapsed ? "[&>svg]:size-6!" : "[&>svg]:size-6!",
                          active
                            ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white hover:text-white"
                            : "text-gray-600 bg-transparent hover:bg-gray-100 hover:text-gray-600",
                        )}
                      >
                        <item.icon
                          className={cn(
                            "shrink-0",
                            active ? "text-white" : "text-gray-400",
                          )}
                        />
                        {!isCollapsed && (
                          <span className="text-sm font-semibold truncate leading-none">
                            {item.title}
                          </span>
                        )}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  );
};
