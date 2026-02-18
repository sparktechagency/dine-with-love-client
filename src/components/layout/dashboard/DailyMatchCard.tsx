import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MatchData {
  id: number | string;
  name: string;
  distance: string;
  match: number;
  image: string;
}

interface DailyMatchCardProps {
  data: MatchData;
  className?: string;
}

export const DailyMatchCard = ({ data, className }: DailyMatchCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-md p-4 border border-gray-100 flex flex-col gap-4 transition-all duration-300",
        "hover:bg-[#F9E6E6] hover:border-[#F9E6E6] hover:shadow-sm hover:shadow-[#F9E6E6]",
        className,
      )}
    >
      <div className="relative aspect-4/3 rounded-md overflow-hidden">
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold text-gray-900">{data.name}</h4>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-bold text-gray-400">
              Match {data.match}%
            </span>
            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8]"
                style={{ width: `${data.match}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
          <MapPin className="size-4" />
          <span>{data.distance}</span>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <Button
            asChild
            className="w-full h-12 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold border-none shadow-none"
          >
            <Link href={`/dashboard/confirm-match`}>Connection Request</Link>
          </Button>
          <div className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] p-px rounded-md">
            <Button
              asChild
              className="w-full h-11 bg-white font-bold shadow-none text-primary hover:bg-white"
            >
              <Link href={`/dashboard/view-detail/${data.id}`}>
                View detail&apos;s
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
