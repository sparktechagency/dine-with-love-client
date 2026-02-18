"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const PaymentHistory = () => {
  const history = [
    {
      id: 1,
      title: "Dinner booking with Sarah",
      date: "November 10, 2023",
      amount: "$10",
      status: "complete",
    },
    {
      id: 2,
      title: "Dinner booking with Mike",
      date: "November 10, 2023",
      amount: "$5",
      status: "complete",
    },
    {
      id: 3,
      title: "Group Dinner booking",
      date: "November 10, 2023",
      amount: "$10",
      status: "complete",
    },
  ];

  return (
    <Card className="rounded-[24px] border border-gray-100 shadow-sm p-8 transition-all hover:border-gray-200">
      <CardHeader className="px-0 pt-0 pb-8">
        <CardTitle className="text-xl font-bold text-gray-900">
          Payments
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 pb-0 space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-100 bg-white transition-all hover:bg-gray-50/50"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900 leading-none">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium">
                  {item.date}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={cn(
                    "px-2.5 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider",
                    item.status === "complete"
                      ? "bg-green-50 text-green-500"
                      : "bg-orange-50 text-orange-500",
                  )}
                >
                  {item.status}
                </span>
                <span className="text-xs font-bold text-gray-900">
                  {item.amount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
