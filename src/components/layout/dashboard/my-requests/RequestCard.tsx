import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { RequestData } from "./types";

interface RequestCardProps {
  data: RequestData;
  onFeedbackClick?: (id: number | string) => void;
}

export const RequestCard = ({ data, onFeedbackClick }: RequestCardProps) => {
  const isPending =
    data.status.toLowerCase() === "pending" ||
    data.status.toLowerCase() === "in review";
  const isApproved = data.status.toLowerCase() === "approved";
  const isCompleted =
    data.status.toLowerCase() === "completed" ||
    data.status.toLowerCase() === "past";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="relative size-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image
              src={data.avatar}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-black text-gray-900">{data.name}</h4>
            {data.requestedDate && (
              <p className="text-sm font-bold text-gray-400 font-sans tracking-tight">
                Requested on {data.requestedDate}
              </p>
            )}
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-yellow-50 text-yellow-500 text-[10px] font-bold rounded-full uppercase border border-yellow-100/50">
                {data.type}
              </span>
              {data.isAdvisor && (
                <span className="px-3 py-1 bg-purple-50 text-purple-500 text-[10px] font-bold rounded-full uppercase border border-purple-100/50">
                  Advisor Match
                </span>
              )}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "px-4 py-1.5 text-[10px] font-black rounded-full uppercase border shadow-sm",
            isPending && "bg-yellow-50/50 text-yellow-600 border-yellow-100/50",
            isApproved && "bg-green-50/50 text-green-600 border-green-100/50",
            isCompleted && "bg-blue-50/50 text-blue-600 border-blue-100/50",
          )}
        >
          {data.status}
        </div>
      </div>

      {/* Conditional Content based on status */}
      {isPending && data.message && (
        <div className="p-6 bg-pink-50/30 rounded-md border border-pink-100/50 space-y-2">
          <p className="text-sm font-black text-[#FF3AB3]">Important Note:</p>
          <p className="text-sm font-bold text-gray-500 flex items-center gap-2">
            {data.isAdvisor ? "✅" : "⏳"} {data.message}
          </p>
        </div>
      )}

      {isApproved && (
        <div className="p-6 bg-pink-50/30 rounded-md border border-pink-100/50 space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-md bg-linear-to-br from-[#FF3AB3] to-[#5432C8] flex items-center justify-center text-white shrink-0">
              🍽️
            </div>
            <h5 className="font-black text-[#FF3AB3]">Dinner Details</h5>
          </div>
          <div className="space-y-3 pl-13">
            {data.dinnerDate && (
              <p className="text-sm font-bold text-gray-600 flex items-center gap-3">
                📅 {data.dinnerDate}
              </p>
            )}
            {data.location && (
              <p className="text-sm font-bold text-gray-600 flex items-center gap-3">
                📍 {data.location}
              </p>
            )}
            <p className="text-sm font-bold text-[#FF3AB3] italic pt-2">
              A confirmation has been sent to your email . See you there !
            </p>
          </div>
        </div>
      )}

      {isCompleted && (
        <>
          <div className="p-6 bg-pink-50/30 rounded-md border border-pink-100/50 space-y-4">
            <p className="text-sm font-black text-[#FF3AB3]">Dinner Details:</p>
            {data.dinnerDate && (
              <p className="text-sm font-bold text-gray-600 flex items-center gap-3">
                📅 {data.dinnerDate}
              </p>
            )}
            {data.participants && data.participants.length > 0 && (
              <div className="flex gap-2 pt-2">
                {data.participants.map((p, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "size-10 rounded-full border-2 border-white overflow-hidden shadow-sm",
                      idx > 0 && "-ml-4",
                    )}
                  >
                    <Image
                      src={p}
                      alt={`p${idx}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button
            onClick={() => onFeedbackClick?.(data.id)}
            className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-black rounded-md text-lg border-none shadow-none cursor-pointer hover:shadow-lg hover:shadow-purple-100 transition-all"
          >
            Give feedback
          </Button>
        </>
      )}
    </div>
  );
};
