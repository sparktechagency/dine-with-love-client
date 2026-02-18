"use client";

import { FormSelect } from "@/components/ui/form-select";
import { cn } from "@/lib/utils";

interface PaymentRecord {
  id: string;
  paymentRef: string;
  user: string;
  date: string;
  amount: string;
  matchType: "1:1 Dinner" | "Group Dinner";
  status: "Paid" | "Pending";
}

const paymentRecords: PaymentRecord[] = [
  {
    id: "1",
    paymentRef: "001",
    user: "Sara",
    date: "2,Nov-24",
    amount: "$154",
    matchType: "1:1 Dinner",
    status: "Paid",
  },
  {
    id: "2",
    paymentRef: "042",
    user: "John",
    date: "2,Nov-24",
    amount: "$121",
    matchType: "Group Dinner",
    status: "Pending",
  },
  {
    id: "3",
    paymentRef: "453",
    user: "Jacob",
    date: "2,Nov-24",
    amount: "$123",
    matchType: "1:1 Dinner",
    status: "Paid",
  },
  {
    id: "4",
    paymentRef: "567",
    user: "Salna",
    date: "2,Nov-24",
    amount: "$114",
    matchType: "Group Dinner",
    status: "Pending",
  },
  {
    id: "5",
    paymentRef: "623",
    user: "Tara",
    date: "2,Nov-24",
    amount: "$100",
    matchType: "1:1 Dinner",
    status: "Paid",
  },
];

export const PaymentsContent = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-gray-900">Payment Records</h2>
        <div className="w-40">
          <label className="text-xs font-bold text-gray-400 block mb-1">
            Filter
          </label>
          <FormSelect
            options={[
              { value: "2024", label: "2024" },
              { value: "2023", label: "2023" },
            ]}
            placeholder="2024"
          />
        </div>
      </div>

      <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white">
              <th className="px-6 py-4 font-bold text-sm">Payment Ref</th>
              <th className="px-6 py-4 font-bold text-sm">Users</th>
              <th className="px-6 py-4 font-bold text-sm">Date</th>
              <th className="px-6 py-4 font-bold text-sm">Amount</th>
              <th className="px-6 py-4 font-bold text-sm">Match Type</th>
              <th className="px-6 py-4 font-bold text-sm">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {paymentRecords.map((record) => (
              <tr
                key={record.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-6 py-5 text-sm font-bold text-gray-900">
                  Key: {record.paymentRef}
                </td>
                <td className="px-6 py-5 text-sm font-bold text-gray-900">
                  {record.user}
                </td>
                <td className="px-6 py-5 text-sm font-bold text-gray-900">
                  {record.date}
                </td>
                <td className="px-6 py-5 text-sm font-bold text-gray-900">
                  {record.amount}
                </td>
                <td className="px-6 py-5">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold",
                      record.matchType === "1:1 Dinner"
                        ? "bg-pink-50 text-[#FF3AB3]"
                        : "bg-purple-50 text-[#5432C8]",
                    )}
                  >
                    {record.matchType}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold border",
                      record.status === "Paid"
                        ? "bg-green-50 text-green-500 border-green-100"
                        : "bg-gray-50 text-gray-500 border-gray-200",
                    )}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
