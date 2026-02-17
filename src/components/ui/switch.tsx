"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const Switch = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <div className="relative inline-flex items-center">
    <input
      type="checkbox"
      className={cn(
        "peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-input transition-colors checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
    <span className="pointer-events-none absolute left-0.5 h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform peer-checked:translate-x-5" />
  </div>
));
Switch.displayName = "Switch";

export { Switch };
