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
  Bell,
  CalendarCheck,
  CreditCard,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

const adminItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Match Management",
    url: "/admin/matches",
    icon: Heart,
  },
  {
    title: "Booking Requests",
    url: "/admin/bookings",
    icon: CalendarCheck,
  },
  {
    title: "Payments",
    url: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Special Advisor Requests",
    url: "/admin/advisor-requests",
    icon: UserCheck,
  },
  {
    title: "Notifications",
    url: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { state, isMobile, setOpenMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

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
            href="/admin"
            className={cn(
              "flex items-center gap-2",
              isCollapsed ? "justify-center" : "",
            )}
          >
            <div className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] p-2 rounded-xl">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="size-8"
              />
            </div>
            {!isCollapsed && (
              <span className="font-rubik font-black text-2xl bg-linear-to-r from-[#FF3AB3] to-[#5432C8] bg-clip-text text-transparent">
                Glint Admin
              </span>
            )}
          </Link>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent className="flex-1 py-4 px-4 overflow-y-auto no-scrollbar">
          <SidebarGroup>
            <SidebarMenu className="space-y-2">
              {adminItems.map((item) => {
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
                          active
                            ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white hover:text-white hover:opacity-90"
                            : "text-gray-500 bg-transparent hover:bg-gray-50 hover:text-gray-900",
                        )}
                      >
                        <item.icon
                          className={cn(
                            "size-5 shrink-0",
                            active
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-900",
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
