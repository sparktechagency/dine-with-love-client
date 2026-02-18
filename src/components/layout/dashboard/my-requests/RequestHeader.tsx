import { Search } from "lucide-react";

export const RequestHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-gray-900">Request</h2>
        <p className="text-gray-500 font-medium tracking-tight">
          Track and manage your dinner requests
        </p>
      </div>
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#FF3AB3]" />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-12 pl-10 pr-2 rounded-md border border-gray-100 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all shadow-sm shadow-gray-50 font-bold"
        />
      </div>
    </div>
  );
};
