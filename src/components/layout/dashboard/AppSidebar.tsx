"use client";
import logo from "@/assets/logo/logo.png";
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
  LogOut,
  MailOpen,
  MessageSquare,
  Settings,
  UserCheck,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

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
  const { state, isMobile, setOpenMobile } = useSidebar();
  const isCollapsed = state === "collapsed";
  const router = useRouter();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("is_admin");
    toast.success("Logged out successfully");
    router.push("/login");
  };
  return (
    <Sidebar collapsible="icon" className="border-none">
      <div className="flex flex-col h-full bg-white">
        {/* Header - Logo */}
        <SidebarHeader
          className={cn(
            "h-24 flex justify-center items-center transition-all",
            isCollapsed ? "px-2" : "px-6",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] p-2.5 rounded-lg"
          >
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="size-10 md:size-12"
            />
          </Link>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent className="flex-1 py-4 px-4 overflow-y-auto no-scrollbar">
          <SidebarGroup>
            <SidebarMenu className="space-y-2">
              {items.map((item) => {
                const active =
                  pathname === item.url ||
                  (item.url !== "/admin" && pathname.startsWith(item.url));

                return (
                  <SidebarMenuItem key={item.title}>
                    <Link
                      href={item.url}
                      className="w-full block"
                      onClick={handleLinkClick}
                    >
                      <SidebarMenuButton
                        tooltip={isCollapsed ? item.title : undefined}
                        className={cn(
                          "w-full h-12 cursor-pointer flex items-center transition-all rounded-lg",
                          isCollapsed ? "justify-center p-0" : "px-4 gap-3",
                          isCollapsed ? "[&>svg]:size-6!" : "[&>svg]:size-6!",
                          active
                            ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white hover:text-white hover:opacity-90"
                            : "text-gray-500 bg-transparent hover:bg-gray-50",
                        )}
                      >
                        <item.icon
                          className={cn(
                            "shrink-0",
                            active ? "text-white" : "text-gray-400",
                          )}
                        />
                        {!isCollapsed && (
                          <span className="text-sm font-bold truncate">
                            {item.title}
                          </span>
                        )}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}

              {/* Logout Button */}
              <SidebarMenuItem>
                <button
                  onClick={handleLogout}
                  className={cn(
                    "w-full h-12 cursor-pointer flex items-center transition-all rounded-lg px-4 gap-3 text-red-500 hover:bg-red-50",
                    isCollapsed ? "justify-center p-0" : "",
                  )}
                >
                  <LogOut className="size-5 shrink-0" />
                  {!isCollapsed && (
                    <span className="text-sm font-bold">Logout</span>
                  )}
                </button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  );
};
