"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CheckCircle2, Heart, Loader2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

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
  const [isRequested, setIsRequested] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConnectionRequest = async () => {
    if (isRequested) {
      setIsRequested(false);
      toast.info("Request cancelled");
    } else {
      setIsProcessing(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsProcessing(false);
      setIsRequested(true);
      setShowSuccess(true);
      toast.success("Connection sent successfully");
    }
  };

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
            onClick={handleConnectionRequest}
            disabled={isProcessing}
            className={cn(
              "w-full h-12 cursor-pointer font-bold border-none shadow-none text-white",
              isRequested
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-linear-to-r from-[#FF3AB3] to-[#5432C8]",
            )}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : isRequested ? (
              "Cancel Request"
            ) : (
              "Connection Request"
            )}
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

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md border-none p-0 overflow-hidden bg-white">
          <div className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] h-32 flex items-center justify-center relative">
            <div className="absolute -bottom-10 size-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <CheckCircle2 className="size-12 text-green-500" />
            </div>
            <Heart className="size-16 text-white/20 absolute -top-4 -right-4 rotate-12" />
            <Heart className="size-12 text-white/10 absolute top-8 left-8 -rotate-12" />
          </div>
          <div className="p-8 pt-14 text-center space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-black text-gray-900 text-center font-rubik">
                Request Sent!
              </DialogTitle>
            </DialogHeader>
            <p className="text-gray-500 font-medium">
              Your connection request has been sent to{" "}
              <span className="text-primary font-bold">{data.name}</span>.
              We&apos;ll notify you once they accept.
            </p>
            <Button
              onClick={() => setShowSuccess(false)}
              className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-md hover:opacity-95 transition-all shadow-lg text-lg cursor-pointer"
            >
              Great, thanks!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
