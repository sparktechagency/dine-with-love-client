"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PaymentHistory = () => {
  const history = [
    {
      id: 1,
      title: "Dinner booking at Nobu",
      date: "November 10, 2023",
      amount: "$120.00",
      status: "Success",
    },
    {
      id: 2,
      title: "Advisor Consultation",
      date: "November 05, 2023",
      amount: "$45.00",
      status: "Success",
    },
  ];

  return (
    <Card className="rounded-md border shadow-none">
      <CardHeader>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-md border overflow-hidden">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-gray-50/50 transition-colors"
            >
              <div>
                <p className="font-bold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500 font-medium">{item.date}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-bold bg-green-100 text-green-800">
                  {item.status}
                </span>
                <p className="font-bold text-gray-900 mt-1">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
