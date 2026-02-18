"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { AddManualMatch } from "./AddManualMatch";
import { MatchList } from "./MatchList";

export const MatchManagementContent = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [matchType, setMatchType] = useState<"system" | "advisor">("system");

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      {view === "list" ? (
        <div className="space-y-6">
          {/* Custom Tabs */}
          <div className="flex bg-gray-100 p-1 rounded-md w-fit">
            <button
              onClick={() => setMatchType("system")}
              className={cn(
                "px-10 py-3 rounded-md text-sm font-bold transition-all cursor-pointer",
                matchType === "system"
                  ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700",
              )}
            >
              System Matches
            </button>
            <button
              onClick={() => setMatchType("advisor")}
              className={cn(
                "px-10 py-3 rounded-md text-sm font-bold transition-all cursor-pointer",
                matchType === "advisor"
                  ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700",
              )}
            >
              Advisor Matches
            </button>
          </div>

          <MatchList type={matchType} onAddMatch={() => setView("add")} />
        </div>
      ) : (
        <AddManualMatch onBack={() => setView("list")} />
      )}
    </div>
  );
};
