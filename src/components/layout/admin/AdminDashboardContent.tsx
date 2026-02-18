"use client";

import { cn } from "@/lib/utils";
import { Calendar, Star, TrendingDown, TrendingUp, User } from "lucide-react";

const stats = [
  {
    title: "Total user",
    value: "100+",
    change: "45% up",
    trend: "up",
    icon: User,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    title: "Today's matches",
    value: "50",
    change: "15% down",
    trend: "down",
    icon: Calendar,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Pending dinner request",
    value: "115+",
    change: "35% up",
    trend: "up",
    icon: Calendar,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    title: "Advisor match request",
    value: "200+",
    change: "55% up",
    trend: "up",
    icon: Star,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

export const AdminDashboardContent = () => {
  return (
    <section className="space-y-10 animate-in fade-in duration-700">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-md border border-gray-100 p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-6">
              <div
                className={cn(
                  "size-12 rounded-md flex items-center justify-center",
                  stat.iconBg,
                )}
              >
                <stat.icon className={cn("size-6", stat.iconColor)} />
              </div>
              <div
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold",
                  stat.trend === "up"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600",
                )}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-black text-gray-900">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Section */}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
          <h3 className="text-xl font-black text-gray-900">Revenue</h3>
          <select className="bg-gray-50 border border-gray-100 rounded-md px-4 py-2 text-xs font-bold outline-hidden cursor-pointer">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className="p-8 min-h-[400px] flex items-center justify-center bg-linear-to-b from-white to-gray-50/30">
          {/* Placeholder for Chart */}
          <div className="w-full h-80 relative flex items-end gap-1 px-4">
            {/* Simple visual representation of a chart for now */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 font-bold italic opacity-30 text-5xl rotate-12 select-none">
                REVENUE CHART PLACEHOLDER
              </p>
            </div>

            {/* Mock chart bars/lines can be added if needed, but the user requested the layout */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100" />
            <div className="flex-1 h-[40%] bg-linear-to-t from-pink-500/20 to-transparent border-t-2 border-pink-500 rounded-t-sm" />
            <div className="flex-1 h-[60%] bg-linear-to-t from-purple-500/20 to-transparent border-t-2 border-purple-500 rounded-t-sm" />
            <div className="flex-1 h-[30%] bg-linear-to-t from-violet-500/20 to-transparent border-t-2 border-violet-500 rounded-t-sm" />
            <div className="flex-1 h-[80%] bg-linear-to-t from-blue-500/20 to-transparent border-t-2 border-blue-500 rounded-t-sm" />
            <div className="flex-1 h-[50%] bg-linear-to-t from-indigo-500/20 to-transparent border-t-2 border-indigo-500 rounded-t-sm" />
          </div>
        </div>
        <div className="px-8 py-6 border-t border-gray-50 flex justify-between">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <span key={day} className="text-xs font-bold text-gray-400">
              {day}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
