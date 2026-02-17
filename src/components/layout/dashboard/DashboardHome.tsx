"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    highlight: true,
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
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, John Smith
          </h2>
          <p className="text-gray-500 font-medium italic">
            &quot;here&apos;s your match of the day!&quot;
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-900">Filter</span>
          <select className="h-10 px-4 rounded-lg border border-gray-100 bg-white text-sm font-bold focus:outline-none">
            <option>All</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Daily Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match) => (
            <div
              key={match.id}
              className={cn(
                "bg-white rounded-lg p-4 border border-gray-100 flex flex-col gap-4 shadow-none transition-all",
                match.highlight &&
                  "bg-pink-50/50 border-pink-100 shadow-sm shadow-pink-100",
              )}
            >
              <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                <Image
                  src={match.image}
                  alt={match.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-gray-900">
                    {match.name}
                  </h4>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold text-gray-400">
                      Match {match.match}%
                    </span>
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8]"
                        style={{ width: `${match.match}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                  <MapPin className="size-4" />
                  <span>{match.distance}</span>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Button className="w-full h-10 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-lg border-none shadow-none">
                    Connection Request
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-10 border-[#5432C8] text-[#5432C8] font-bold rounded-lg hover:bg-purple-50 transition-colors shadow-none"
                  >
                    <Link href={`/dashboard/view-detail/${match.id}`}>
                      View detail&apos;s
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8">
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-lg border-gray-100 bg-[#F5F5F5] text-gray-400 hover:text-gray-900 shadow-none"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <Button className="size-10 rounded-lg bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold border-none shadow-none">
          1
        </Button>
        {[2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            variant="outline"
            className="size-10 rounded-lg border-[#5432C8] text-[#5432C8] font-bold hover:bg-purple-50 shadow-none"
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-lg border-gray-100 bg-[#F5F5F5] text-gray-400 hover:text-gray-900 shadow-none"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
};
