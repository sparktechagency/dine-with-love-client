"use client";

import {
  Calendar,
  Heart,
  Home,
  Menu,
  Search,
  Settings,
  Star,
  User,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
    {
      name: "Explore",
      href: "/dashboard/explore",
      icon: Search,
      current: false,
    },
    {
      name: "Reservations",
      href: "/dashboard/reservations",
      icon: Calendar,
      current: false,
    },
    {
      name: "Favorites",
      href: "/dashboard/favorites",
      icon: Heart,
      current: false,
    },
    { name: "Reviews", href: "/dashboard/reviews", icon: Star, current: false },
  ];

  const secondaryNavigation = [
    { name: "Profile", href: "/dashboard/profile", icon: User, current: false },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      current: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DineWithLove</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  item.current
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            ))}

            <div className="pt-4 mt-4 border-t">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-64 lg:flex lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card border-r px-6">
          <div className="flex h-16 shrink-0 items-center border-b">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DineWithLove</span>
            </div>
          </div>

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          item.current
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="mt-auto">
                <ul role="list" className="-mx-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6 text-muted-foreground" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search restaurants, cuisines..."
                  className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button className="relative p-2 text-muted-foreground hover:text-foreground">
                <Heart className="h-5 w-5" />
              </button>

              <div className="hidden lg:flex lg:items-center lg:gap-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
