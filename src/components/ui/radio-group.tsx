"use client";
import { cn } from "@/lib/utils";
import * as React from "react";

const RadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onValueChange?: (value: string) => void;
    defaultValue?: string;
  }
>(({ className, onValueChange, defaultValue, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div
      ref={ref}
      className={cn("grid gap-2", className)}
      {...props}
      data-value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleValueChange(e.target.value)
      }
    />
  );
});
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      type="radio"
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
