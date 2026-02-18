"use client";
import { FormSelect } from "@/components/ui/form-select";
import { useState } from "react";
import { DailyMatchCard } from "./DailyMatchCard";
import { matches } from "./mockData";
import { Pagination } from "@/components/shared/Pagination";

export const DashboardHomeContent = () => {
  const [userName] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored).name : "John Smith";
    }
    return "John Smith";
  });

  return (
    <section className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, {userName}
          </h2>
          <p className="text-gray-500 font-medium italic">
            &quot;here&apos;s your match of the day!&quot;
          </p>
        </div>
        <FormSelect
          label="Filter"
          options={[
            { value: "all", label: "All" },
            { value: "match", label: "Match" },
            { value: "distance", label: "Distance" },
          ]}
          placeholder="All"
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Daily Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {matches.map((match) => (
            <DailyMatchCard key={match.id} data={match} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination currentPage={1} totalPages={5} />
    </section>
  );
};
