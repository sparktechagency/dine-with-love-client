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
      className={cn("flex justify-center items-center gap-2 pt-8", className)}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="size-10 cursor-pointer border-gray-100 bg-[#F5F5F5] text-gray-400 hover:text-gray-900 shadow-none disabled:opacity-50"
      >
        <ChevronLeft className="size-5" />
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange?.(page)}
          variant={currentPage === page ? "default" : "outline"}
          className={cn(
            "size-10 cursor-pointer font-bold shadow-none",
            currentPage === page
              ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white border-none"
              : "border-[#5432C8] text-[#5432C8] result-btn hover:bg-purple-50",
          )}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="size-10 cursor-pointer border-gray-100 bg-[#F5F5F5] text-gray-400 hover:text-gray-900 shadow-none disabled:opacity-50"
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
};
