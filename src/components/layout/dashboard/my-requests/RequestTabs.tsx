import { cn } from "@/lib/utils";
import { RequestStatus } from "./types";

interface RequestTabsProps {
  activeTab: RequestStatus;
  onTabChange: (status: RequestStatus) => void;
}

export const RequestTabs = ({ activeTab, onTabChange }: RequestTabsProps) => {
  const tabs: { value: RequestStatus; label: string }[] = [
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "past", label: "Past Dinners" },
  ];

  return (
    <div className="bg-gray-50/50 p-1 rounded-md flex gap-1 w-full max-w-3xl border border-gray-100/50">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            "flex-1 h-12 rounded-md transition-all capitalize cursor-pointer font-bold",
            activeTab === tab.value
              ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-md shadow-purple-100/20"
              : "text-gray-400 hover:text-gray-600 hover:bg-white/50",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
