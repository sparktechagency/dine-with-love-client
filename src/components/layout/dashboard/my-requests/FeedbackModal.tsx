import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormTextarea } from "@/components/ui/form-textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestId: number | string | null;
}

export const FeedbackModal = ({
  isOpen,
  onClose,
  requestId,
}: FeedbackModalProps) => {
  const [match, setMatch] = useState<"yes" | "no" | null>(null);

  const handleSubmit = () => {
    // Handle submission logic
    console.log("Feedback submitted for:", requestId, "Match:", match);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[450px] rounded-md p-8">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-black text-gray-900 border-none">
            Feedback
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          <div className="space-y-4">
            <div
              onClick={() => setMatch("yes")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  "size-6 rounded-full border-2 flex items-center justify-center transition-all",
                  match === "yes"
                    ? "bg-[#FF3AB3] border-[#FF3AB3]"
                    : "border-gray-200 group-hover:border-[#FF3AB3]/50",
                )}
              >
                {match === "yes" && (
                  <div className="size-2 rounded-full bg-white" />
                )}
              </div>
              <span
                className={cn(
                  "font-bold transition-all",
                  match === "yes" ? "text-gray-900" : "text-gray-500",
                )}
              >
                It was a match
              </span>
            </div>

            <div
              onClick={() => setMatch("no")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  "size-6 rounded-full border-2 flex items-center justify-center transition-all",
                  match === "no"
                    ? "bg-[#FF3AB3] border-[#FF3AB3]"
                    : "border-gray-200 group-hover:border-[#FF3AB3]/50",
                )}
              >
                {match === "no" && (
                  <div className="size-2 rounded-full bg-white" />
                )}
              </div>
              <span
                className={cn(
                  "font-bold transition-all",
                  match === "no" ? "text-gray-900" : "text-gray-500",
                )}
              >
                Not a match
              </span>
            </div>
          </div>

          <FormTextarea
            label="additional notes(optional)"
            placeholder="Leading for connections by enjoy outdoor dinners"
            className="w-full min-h-[120px] bg-gray-50/30"
          />

          <Button
            onClick={handleSubmit}
            className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-black rounded-md text-lg border-none shadow-none cursor-pointer"
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
