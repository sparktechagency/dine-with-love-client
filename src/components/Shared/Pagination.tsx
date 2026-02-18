import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={cn("flex justify-center items-center gap-3 pt-8", className)}
    >
      <Button
        size="icon"
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="size-12 cursor-pointer bg-white border border-gray-200 shadow-none disabled:opacity-50"
      >
        <ChevronLeft className="size-5 text-gray-800" />
      </Button>

      {pages.map((page) => (
        <div
          key={page}
          className={`p-px bg-linear-to-r from-[#FF3AB3] to-[#5432C8] rounded-md`}
        >
          <Button
            onClick={() => onPageChange?.(page)}
            variant="default"
            className={cn(
              "size-11 cursor-pointer font-bold shadow-none",
              currentPage === page
                ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] border-none"
                : "bg-white hover:bg-white",
            )}
          >
            <span
              className={`${currentPage === page ? "text-white" : "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] border-none bg-clip-text text-transparent"}`}
            >
              {page}
            </span>
          </Button>
        </div>
      ))}

      <Button
        size="icon"
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="size-12 cursor-pointer bg-white border border-gray-200 shadow-none disabled:opacity-50 hover:bg-transparent"
      >
        <ChevronRight className="size-5 text-gray-500" />
      </Button>
    </div>
  );
};
