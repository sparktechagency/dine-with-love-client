"use client";
import { Pagination } from "@/components/shared/Pagination";
import { FormSelect } from "@/components/ui/form-select";
import { DailyMatchCard } from "./DailyMatchCard";
const matches = [
  {
    id: 1,
    name: "Tahmidul hasan",
    distance: "1.2km away",
    match: 78,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Hasnyen",
    distance: "1.5km away",
    match: 75,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Siam Pandy",
    distance: "2km away",
    match: 85,
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Fuzi chai",
    distance: "3km away",
    match: 72,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Jemmy lukaz",
    distance: "1km away",
    match: 55,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Tommy sing",
    distance: "1.2km away",
    match: 65,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
  },
];

export const DashboardHome = () => {
  return (
    <section className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, John Smith
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
