"use client";
import { FormSelect } from "@/components/ui/form-select";
import { cn } from "@/lib/utils";
import { Calendar, Star, TrendingDown, TrendingUp, User } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

const chartData = [
  { name: "Sun", revenue: 80, users: 40 },
  { name: "Mon", revenue: 150, users: 60 },
  { name: "Tue", revenue: 100, users: 120 },
  { name: "Wed", revenue: 250, users: 50 },
  { name: "Thu", revenue: 350, users: 140 },
  { name: "Fri", revenue: 160, users: 70 },
  { name: "Sat", revenue: 160, users: 80 },
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
          <div className="w-40">
            <FormSelect
              options={[
                { value: "monthly", label: "Monthly" },
                { value: "weekly", label: "Weekly" },
                { value: "yearly", label: "Yearly" },
              ]}
              placeholder="Monthly"
            />
          </div>
        </div>

        <div className="p-8 h-[450px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e5e7eb" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#e5e7eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#f3f4f6"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fontWeight: 700, fill: "#9ca3af" }}
                dy={20}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fontWeight: 700, fill: "#9ca3af" }}
                ticks={[10, 50, 100, 150, 500, 1000]}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#0ea5e9] text-white px-3 py-1.5 rounded-sm flex items-center gap-2 font-bold shadow-lg text-sm">
                        <span>{payload[0].value}</span>
                        <div className="w-px h-3 bg-white/30" />
                        <span>{payload[1].value}</span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#a855f7"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#e5e7eb"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorUsers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
